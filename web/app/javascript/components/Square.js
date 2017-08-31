import React from 'react';


export default class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render () {
    // TODO: map and draw all thing lying on the square
    
    const things = this.props.things.map((thing) => {
      if (thing.x == this.props.x  &&
          thing.y == this.props.y) {
        return thing.jsx();
      } else {
        return null;
      }
    })

    return <div className='j-grid-square'>
      {things}
    </div>
  }
}

