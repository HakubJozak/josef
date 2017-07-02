class HomeController < ApplicationController
  def index
    @code = """
# Cesta kolem sveta za 39 ctvercu

prikaz robot.vpravo_vbok
  3.krat { vlevo_vbok }
konec

4.krat { 
  9.krat { robot.krok }
  robot.vpravo_vbok
}
"""
  end

  private

  def boot_rb
    f = %w( stdlib robot context ).inject('') { |full,file|
      code = Rails.root.join("lib/josef/#{file}.rb").read
      full.concat(code)
      full.concat("\n\n")
    }
  end

  helper_method :boot_rb

end
