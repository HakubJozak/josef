import React from 'react';


export default class Console extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [ { level: 'info', text: 'Vítejte v Josefově dole!'} 
]
    }
  }

  addMessage (msg) {
    this.state.lines.unshift(msg);
    this.setState({
      lines: this.state.lines
    });
  }

  componentDidMount () {
    PubSub.subscribe('message',  (_,msg) => { this.addMessage(msg) } )
  }  


  
  render () {
    var divs = this.state.lines.map(function(msg,i) {
      const klass = `${msg.level} j-console-line`

       return (<div className={klass} key={i} >
               {msg.text}
      </div>)
    });

    return (<div className='j-console'>
            {divs}
            </div>)
  }
}

