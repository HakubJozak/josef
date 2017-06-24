import React from 'react';
import Square from './Square';


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

    squares[3][3].robot = true;
    
    this.state = {
      squares: squares,
      messages: []
    }    
  } 
          

  componentDidMount () {
    window.josefs_world = this;
  }

  say (phrase) {
    this.setState({ message: phrase })
  }

  renderRow (row,y) {
    const squaresJsx = row.map(function(square,x) {
       const key = `${x}.${y}`
       return <Square x={x} y={y} robot={square.robot} key={key} />;
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
