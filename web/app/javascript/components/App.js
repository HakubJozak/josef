import React from 'react';
import CodeEditor from './CodeEditor';
import Grid       from './Grid';
import Runner     from './Runner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.runner = new Runner();
  }

  componentDidMount () {
    Opal.eval(this.props.boot_rb);
  }

  render() {
    return (
      <div className='container-fluid'>
        <h1>Hello Josef</h1>

        <div className='row'>
          <div className='col-md-6'>
            <CodeEditor code={this.props.code} />
          </div>

          <div className='col-md-6'>
            <Grid />
          </div>
        </div>
      </div>
    )
  }
}

export default App
