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
      robot:     { x: 3, y: 4 }
    }    
  } 
          
  step (msg, data) {
    var updated = new Object( ... this.state );
    updated.robot = { x: this.state.robot.x + 1, y: this.state.robot.y }
    this.setState(updated);
  }
  
  say (phrase) {
    this.setState({ message: phrase })
  }

  componentDidMount () {
    var fnc = () => { this.step() }
    PubSub.subscribe('robot', fnc)
  }

  renderRow (row,y) {
    const squaresJsx = row.map( (square,x) => {
       const key = `${x}.${y}`
       const hasRobot = this.state.robot.x == x && this.state.robot.y == y
       return <Square x={x} y={y} hasRobot={hasRobot} key={key} />;
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
