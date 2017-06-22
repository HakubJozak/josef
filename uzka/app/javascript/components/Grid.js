import React from 'react';


class Grid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // squares: Array(9).fill(null),
      messages: []
    };
  }

  componentDidMount () {
    window.josefs_world = this;
  }

  say (phrase) {
    this.setState({ message: phrase })
  }

  render () {
    return (
      <div>
        <h1>Josef says:</h1>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Grid
