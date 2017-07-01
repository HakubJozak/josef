module Josef
  module Stdlib
    def vypis(*args)
      puts *args
    end
  end
end

class Fixnum
  alias :krat :times
end
