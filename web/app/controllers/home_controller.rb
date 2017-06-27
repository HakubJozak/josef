class HomeController < ApplicationController
  def index
    @code = """
      a = 3
      vypis 'hello!'

      pokud a > 4
        robot.rekni 'Ahoj'
      jinak
        robot.rekni 'Nashledanou'
      konec
     """

    @code = """
      9.times { robot.krok }
      3.times { robot.vlevo_vbok }
      9.times { robot.krok }
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
