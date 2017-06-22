module Josef
  module Stdlib
    def vypis(*args)
      puts *args
    end
  end

  class Robot
    attr_reader :city, :direction

    DIRECTIONS = [ :north, :south, :east, :west ]

    def initialize
      @city = 10.times.map { Array.new(10,0) }
      @x = 0
      @y = 0
      @direction = :north
    end

    def rekni(txt)
      %x{
        window.josefs_world.say(txt) ;
      }
    end

    def poloz
      puts 'Pokladam'
    end

    def krok
      puts 'Krok'
    end
  end  
end

include Josef::Stdlib
$robot = Josef::Robot.new
