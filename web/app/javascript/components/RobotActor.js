import Pubsub from 'pubsub-js';
import React  from 'react';
import BotImage from './bot.png'


export default class RobotActor  {
  constructor (props) {
    // super(props);
    // this.square    = opts.square;
    this.direction = 'east';
    this.name = 'Robot';
    PubSub.subscribe('robot.update',  (msg,r) => { this.updatePosition(msg,r) } )
  }

  updatePosition (msg, r) {
    this.direction = r.direction;
  }

  jsx () {
    const clazz = `${this.direction} robot-actor`;

    //return <img src={BotImage} className={clazz} />
    return <div className={clazz} ></div>;
  }
  
}
