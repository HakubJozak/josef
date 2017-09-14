import Pubsub from 'pubsub-js';
import React  from 'react';
import BotImage from './bot.png'


export default class RobotActor  {
  constructor (props) {
    // FIXME: get from stdlib.rb
    this.x = 0;
    this.y = 0;
    this.direction = 'east';
    this.name = 'Robot';
    PubSub.subscribe('robot.update',  (msg,r) => { this.updatePosition(msg,r) } )
  }

  updatePosition (msg, r) {
    this.direction = r.direction;
    this.x = r.x;
    this.y = r.y;
  }

  jsx () {
    const clazz = `${this.direction} robot-actor`;
    //return <img src={BotImage} className={clazz} />
    return <div key={this.name} className={clazz} ></div>;
  }

}
