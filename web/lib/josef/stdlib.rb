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
        PubSub.publish( 'robot.message', { text: txt } );
      }
    end

    def poloz
      puts 'Pokladam'
    end

    def krok
      puts 'Krok'
      %x{
        PubSub.publish( 'robot', { command: 'step' } );
      }
    end
  end

  class Context
    include Josef::Stdlib
    attr_reader :robot
    
    def initialize
      @robot = ::Josef::Robot.new
    end

  end
end


Josef::Context.new


