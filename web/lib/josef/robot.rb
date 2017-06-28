module Josef
  class Robot
    attr_reader :x, :y, :direction

    DIRECTIONS = [ :north, :east, :south, :west ]

    MOVES = {
      north: [  0, -1 ],
      south: [  0,  1 ],
      east:  [  1,  0 ],
      west:  [ -1,  0 ]
    }

    def initialize
      #  @city = 10.times.map { Array.new(10,0) }
      @x = 0
      @y = 0
      @direction = :east
      puts '[robot] Ready'
    end

    def rekni(txt)
      puts '[robot] say'
    end

    def poloz
      puts '[robot] put'      
    end

    def vlevo_vbok
      puts '[robot] turn_left'
      i = DIRECTIONS.find_index(@direction)
      @direction = DIRECTIONS[i-1]
      send_update
    end

    def krok
      puts '[robot] step'
      delta = MOVES[@direction]
      moved = [ @x + delta[0], @y + delta[1] ]

      if in_bounds?(*moved)
        @x, @y = moved
        send_update
      else
        send_error
      end
    end

    private

    def in_bounds?(x,y)
      x >= 0 && x < 10 &&
        y >= 0 && y < 10
    end

    def send_update
      %x{
        PubSub.publish('runner.update', { x: #{@x}, y: #{@y}, direction: #{@direction} });
      }
    end

    def send_error
      %x{
        console.error('[robot] out of bounds');
        PubSub.publish('runner.stop');
      }
    end
    
  end
end
