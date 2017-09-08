import React from 'react';
import Konva from 'konva';


export default class Playground extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
      // first we need to create a stage
      this.stage = new Konva.Stage({
        container: 'konva-playground',   // id of container <div>
        width: 500,
        height: 500
      });

      // then create layer
      this.grid = new Konva.Layer();

      for (var i =1; i < 10; i++) {
           var horizontal = new Konva.Line({
             points: [ 0, i * 50, 500, i * 50 ],
             stroke: 'black',
             strokeWidth: 1
           });

           var vertical = new Konva.Line({
             points: [ i * 50, 0, i * 50, 500 ],
             stroke: 'black',
             strokeWidth: 1
           });

           this.grid.add(horizontal);
           this.grid.add(vertical);
      }

      this.stage.add(this.grid);
  }        

  render() {
      return <div id='konva-playground'>
      </div>;
  }
}

