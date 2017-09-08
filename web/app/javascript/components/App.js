import React from 'react';


import CodeEditor from './CodeEditor';
import Grid       from './Grid';
import Runner     from './Runner';
import Console    from './Console';
import Playground    from './Playground';

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
          <div className='col-md-5'>
            <CodeEditor code={this.props.code} />
          </div>

          <div className='col-md-7'>
            <Playground/>
          </div>
      </div>
      </div>
    )
  }
}

export default App
