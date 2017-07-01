import React from 'react';

import CodeEditor from './CodeEditor';
import Grid       from './Grid';
import Runner     from './Runner';
import Console    from './Console';

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
        <br/>
        <div className='row'>
          <div className='col-md-4'>
            <CodeEditor code={this.props.code} />
          </div>

          <div className='col-md-4'>
            <Grid/>
          </div>

          <div className='col-md-4'>
            <Console/>
          </div>      
        </div>
      </div>
    )
  }
}

export default App
