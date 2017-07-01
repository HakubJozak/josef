import React from 'react';

class Runner {
  constructor (opts) {
    this.delay   = 300;
    this.events  = []
    this.running = false;
    this.consumeEvent = this.consumeEvent.bind(this);

    PubSub.subscribe('runner',  (msg,data) => {
      switch (msg) {
      case 'runner.update':
        if (this.running) {
          this.events.push(data);
        }
        break;

      case 'runner.start':
        this.execute(data);
        this.start();
        break;

      case 'runner.stop':
        this.stop();
        break;
    }});
  }

  start() {
    this.running = true;
    this.planNext();
  }

  stop() {
    this.running = false;
    this.event = [];
    clearTimeout(this.consumeEvent);
  }

  consumeEvent () {
    if (this.running && this.events.length > 0) {
      var data = this.events.shift();
      PubSub.publish('robot.update', data);
    }

    this.planNext();
  }

  inBounds (r) {
    return r.x >= 0 && r.x < 10 &&
           r.y >= 0 && r.y < 10;
  }

  planNext () {
    if (this.running) {
      setTimeout( this.consumeEvent, this.delay);
    }
  }

  hello() {
    debugger
    console.info( 'hello from runner');
  }

  execute (code) {
    try {
      window.runner = this;
      Opal.eval("require 'native'");
      Opal.eval('Josef::Context.instance.runner = Native::Object.new(`window.runner`)');
//      Opal.eval('puts Josef::Context.instance.hello')
//      var wrapped = `Josef::Context.instance.instance_eval("${code}")`
//      Opal.eval(wrapped);
    } catch (e) {
      console.log(e);
      this.stop();
    }    
  }
  
}

export default Runner
