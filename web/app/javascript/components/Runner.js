class Runner {
  constructor (app) {
    this.delay  = 300;
    this.events = []
    this.app    = app;

    PubSub.subscribe('runner.update',  (msg,r) => this.addEvent(msg,r) );

    this.planNextConsume();
  }

  addEvent(msg,data) {
    console.info(msg, data)
    this.events.pushObject([msg, data]);
  }

  consumeEvent () {
    if (this.events.length > 0) {
      var event = events.shift();
      PubSub.publish('robot.update', event[0], event[1]);
    }
    
    this.planNextConsume();
  }

  planNextConsume () {
    setTimeout( () => { this.consumeEvent() }, this.delay);
  }
  
}


export default Runner
