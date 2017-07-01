export default class Runner {
  constructor (opts) {
    this.delay   = 300;
    this.events  = []
    this.running = false;
    this.consumeEvent = this.consumeEvent.bind(this);

    PubSub.subscribe('runner',  (msg,data) => {
      switch (msg) {
      case 'runner.execute':
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
      try {
        var data = this.events.shift();
        var robot_data = data.block.call(this);
        PubSub.publish('robot.update', robot_data);
      } catch (e) {
        this.stop();
        console.log(e);
        PubSub.publish('message', { level: 'error', text: 'Robot narazil do zdi!'})
      }


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


  execute (code) {
    var wrapped = `Josef::Context.instance.instance_eval("${code}")`
    Opal.eval(wrapped);
  }

}


