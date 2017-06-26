import React from 'react';
import CodeEditor from './CodeEditor';
import Grid       from './Grid';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    Opal.eval(this.props.stdlib);
    // window.context = Opal.eval('Opal.global.context = Josef::Context.new')
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
