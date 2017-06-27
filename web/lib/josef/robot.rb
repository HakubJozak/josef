module Josef
  class Robot
    attr_reader :city, :direction

    DIRECTIONS = [ :north, :east, :south, :west ]

    MOVES = {
      north: [  0,  1 ],
      south: [  0, -1 ],
      east:  [  1,  0 ],
      west:  [ -1,  0 ]
    }


    def initialize
      #  @city = 10.times.map { Array.new(10,0) }
      @x = 0
      @y = 0
      @direction = :east
    end

    def rekni(txt)
    end

    def poloz
      puts 'Pokladam'
    end

    def vlevo_vbok
      i = DIRECTIONS.find_index(@direction)
      @direction = DIRECTIONS[i-1]
      send_update
    end

    def krok
      delta = MOVES[@direction]
      moved = [ @x + delta[0], @y + delta[1] ]

      if in_bounds?(*moved)
        @x, @y = moved
      end

      send_update
    end

    private

    def in_bounds?(x,y)
      x >= 0 && x < 10 &&
        y >= 0 && y < 10
    end

    def send_update
      %x{
        console.info('sending')
        PubSub.publish('runner.update', { x: #{@x}, y: #{@y}, direction: #{@direction} })
      }
    end
  end
end