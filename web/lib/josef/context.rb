module Josef
  class Context
    include Josef::Stdlib
    attr_reader :robot
    attr_accessor :runner

    def self.instance
      @context ||= new
    end

    def hello
      runner.call('hello')
    end

    def initialize
      @robot = ::Josef::Robot.new
    end
  end
end
