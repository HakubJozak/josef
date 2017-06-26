import React from 'react';
import 'codemirror'
import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/monokai.css';
import './josef/codemirror';
import cm from 'codemirror';


// CodeMirror integration example:
//
// https://github.com/survivejs-demos/react-demos/blob/master/demos/index.js
//
class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.code
    }
  }

  handleCodeChange = () => {
    const value = this.codeMirror.getValue();
    this.setState({ code: value })
  }

  componentDidMount() {
    const opts = {
      mode: 'josef',
      lineNumbers: true,
      extraKeys: {
        'Ctrl-Enter': () => { this.evalCode() }
      }
    }

    this.codeMirror = cm.fromTextArea(this.refs.editor, opts)
    this.codeMirror.on('change',this.handleCodeChange);
  }

  evalCode = (e) => {
    if (e) { e.preventDefault(); }

    try {
      // const wrapped =
      // '`window.context`.instance_eval("`this.state.code`")'
      var wrapped = `Josef::Context.instance.instance_eval("${this.state.code}")`
      Opal.eval(wrapped);
    } catch (e) {
      console.log(e);
    }
  }

  render () {
    return (
      <form onSubmit={this.evalCode}>
        <textarea ref='editor'  defaultValue={this.state.code} />
        <input type='submit' value='Go!' id="go-button" className='btn btn-primary'/>
      </form>
    )
  }
}

export default CodeEditor
