import React from 'react';

class Runner {
  constructor (opts) {
    this.delay  = 300;
    this.events = []
    // this.app    = opts.app;

    PubSub.subscribe('runner.update',  (msg,data) => {
      this.events.push(data);
    } );

    this.planNextConsume();
    console.info('Runner is ready');
  }

  consumeEvent () {
    console.info('updating');

    if (this.events.length > 0) {
      var data = this.events.shift();
      PubSub.publish('robot.update', data);
    }
    
    this.planNextConsume();
  }

  planNextConsume () {
    setTimeout( () => { this.consumeEvent() }, this.delay);
  }
  
}

export default Runner
