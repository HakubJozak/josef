import React from 'react';


class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const thing = this.props.things[0];
    var name;

    if (thing) {
      name = thing.name;
    } else {
      name = '';
    }

    return <div className='j-grid-square'>
      {thing == null ? '' : thing.jsx()}
    </div>
  }
}

export default Square;
