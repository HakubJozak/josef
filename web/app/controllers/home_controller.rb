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

    path = Rails.root.join('lib/josef/stdlib.rb')
    @stdlib = File.new(path).read
  end

end
