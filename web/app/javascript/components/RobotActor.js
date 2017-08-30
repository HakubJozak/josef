import Pubsub from 'pubsub-js';


export default class RobotActor {
  constructor (opts) {
    // this.square    = opts.square;
    this.direction = 'east';
    this.name = 'R';
    // PubSub.subscribe('robot.update',  (msg,r) => { this.updatePosition(msg,r) } )
  }

  updatePosition (msg, r) {
    this.direction = r.direction;
  }
}
