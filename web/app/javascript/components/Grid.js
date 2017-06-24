import React from 'react';
import Square from './Square';


class Grid extends React.Component {
  constructor (props) {
    super(props)
    const row = Array(10).fill(null);
    const squares = Array(10).fill(null);

    squares.forEach(function(row,y) {
      row.forEach(function(square,x) {
        row[x] = { x: x, y: y };
      })
    })             

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

  renderRow (row) {
    const squaresJsx = row.map(function(square,i) {
       const key = `${square.x}-${square.y}`
       return <Square x={square.x} y={square.y} robot={square.robot} key={key} />;
    });

    return (
        <div className='j-grid-row'>
          {squaresJsx}
        </div>
    )
  }

  render () {
    const squaresJsx = this.state.squares.map((row,i) => {
      return this.renderRow(row)
    });

    return (
      <div className='j-grid'>
        {squaresJsx}
      </div>
    );
  }
}  


export default Grid
