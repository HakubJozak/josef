module Josef
  class Context
    include Josef::Stdlib
    attr_reader :robot

    def self.instance
      @context ||= new
    end

    def initialize
      @robot = ::Josef::Robot.new
    end
  end
end
