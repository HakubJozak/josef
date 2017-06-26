import React from 'react';


class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className='j-grid-square'>
      {this.props.character}
    </div>
  }
}

export default Square
