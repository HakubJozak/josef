import React from 'react';


export default class Console extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return <div className='j-grid-square'>
      {this.props.character}
    </div>
  }
}

