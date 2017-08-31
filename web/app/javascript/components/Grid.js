import React from 'react';
import Square from './Square';
import RobotActor from './RobotActor';
import Pubsub from 'pubsub-js';


// TODO - rename 'squares' to 'map'
class Grid extends React.Component {
  constructor (props) {
    super(props)

    const robot = new RobotActor({});
    const row = Array(10).fill(null);
    const squares = Array(10).fill(null);

    for (var y =0; y < 10; y++) {
      squares[y] = new Array(10);

      for (var x =0; x < 10; x++) {
        squares[y][x] = new Object({ x: x, y: y });
      }
    }

    this.state = {
      squares:   squares,
      robot:     robot,
      things:    [ robot ],
      messages:  [],
    }
  }

  updateRobot (msg, robot) {
    const old = this.state.robot;
    var updated = new Object( ... this.state );

    this.setState(updated);
  }

  say (phrase) {
    this.setState({ message: phrase })
  }

  componentDidMount () {
    PubSub.subscribe('robot.update',  (msg,r) => { this.updateRobot(msg,r) } )
  }

  renderRow (row,y) {
    const squaresJsx = row.map( (square,x) => {
      const key = `${x}.${y}`
      return <Square x={x} y={y} things={this.state.things} key={key} />;
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
