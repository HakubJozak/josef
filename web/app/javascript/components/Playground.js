import React from 'react';
import Konva from 'konva';

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.width  = 500;
    this.height = 500;
    this.squareSize = 50;
  }

  componentDidMount () {
    this.stage = new Konva.Stage({
      container: 'konva-playground',
      width: this.width,
      height: this.height
    });

    this.drawBackground();
    this.drawGrid();
    this.drawScene();
  }

  render() {
      return <div id='konva-playground'>
      </div>;
  }

  drawScene() {
    this.scene = new Konva.Layer();

    this.robot = new Konva.Group({
      x: 120,
      y: 40,
      rotation: 0,
      draggable: true
    });

    var body = new Konva.Rect({
      x: 0, y: 0,
      width: 60,
      height: 20,
      offsetX: 30,
      offsetY: 10,
      fill: 'orange'});

    var head = new Konva.Ellipse({
        x: 0,
        y: 0,

        radius: {
            x: 20,
            y: 30
        },

        fill: 'gray',
        stroke: 'black',
        strokeWidth: 1
    });

    // head.on('click', function() {
    //     var fill = this.fill() == 'yellow' ? '#00D2FF' : 'yellow';
    //     this.fill(fill);
    //     scene.draw();
    // });

   var simpleText = new Konva.Text({
        x: 20,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
      });


    this.robot.add(body);
    this.robot.add(head);


    var anim = new Konva.Animation((frame) => {
      // this.robot.rotate(10);
    }, this.scene);
    anim.start();

    this.scene.add(simpleText);
    this.scene.add(this.robot);
    this.stage.add(this.scene);
  }

  drawBackground() {
    this.background = new Konva.Layer();
    var rect = new Konva.Rect({ x: 0, y: 0, width: this.width, height: this.height, fill: '#9bce54'});

    // // set fill pattern image
    // var imageObj = new Image();
    // imageObj.onload = function() {
    //   shape.fillPatternImage(imageObj);
    // };


    // imageObj.src = 'path/to/image/jpg';
    this.background.add(rect);
    this.stage.add(this.background);
  }

  drawGrid() {
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
}
