import React from 'react';
import Konva from 'konva';


export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.height = 500;
    this.width  = 500;
    this.squareSize = 50;
  }

  componentDidMount () {
      // first we need to create a stage
      this.stage = new Konva.Stage({
        container: 'konva-playground',   // id of container <div>
        width: this.width,
        height: this.height
      });

      // then create layer
      this.grid = new Konva.Layer();

      for (var i = this.squareSize; i < this.width; i += this.squareSize) {
           var horizontal = new Konva.Line({
             points: [ 0, i, this.height, i],
             stroke: 'black',
             strokeWidth: 1
           });

           var vertical = new Konva.Line({
             points: [ i, 0, i, this.height ],
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

