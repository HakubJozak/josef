import React from 'react';


class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var value;

    if (this.props.robot) {
      value = 'X';
    }
    
    return <div className='j-grid-square'>
      {value}
    </div>
  }
}

export default Square
