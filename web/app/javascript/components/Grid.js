import React from 'react';
import Square from './Square';
import Pubsub from 'pubsub-js';


class Grid extends React.Component {
  constructor (props) {
    super(props)
    const row = Array(10).fill(null);
    const squares = Array(10).fill(null);

    for (var y =0; y < 10; y++) {
      squares[y] = new Array(10);

      for (var x =0; x < 10; x++) {
        squares[y][x] = new Object();
      }
    }

    this.state = {
      squares:   squares,
      messages:  [],
      // FIXME: get from stdlib.rb
      robot:     { x: 0, y: 0, direction: 'east' }
    }
  }

  updateRobot (msg, robot) {
    var updated = new Object( ... this.state );
    updated.robot = robot;
    this.setState(updated);
  }

  say (phrase) {
    this.setState({ message: phrase })
  }

  componentDidMount () {
    // PubSub.subscribe('robot.update',  (msg,r) => this.updateRobot(msg,r) )
  }

  renderRow (row,y) {
    const squaresJsx = row.map( (square,x) => {
       const key = `${x}.${y}`
       const r   = this.state.robot;
       const hasRobot = (r.x == x && r.y == y)
       var character = '';
       const chars  = {
         north: '^',
         south: 'v',
         east:  '>',
         west:  '<',
       }

      if (hasRobot) {
        character = chars[r.direction];
      }

       return <Square x={x} y={y} character={character} key={key} />;
    });


    return (
        <div className='j-grid-row' key={y}>
          {squaresJsx}
        </div>
    )
  }

  render () {
    const squaresJsx = this.state.squares.map((row,y) => {
      return this.renderRow(row,y)
    });

    return (
      <div className='j-grid'>
        {squaresJsx}
      </div>
    );
  }
}


export default Grid
