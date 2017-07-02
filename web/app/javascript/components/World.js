export default class World {
  constructor (opts) {
    for (var y =0; y < 10; y++) {
      squares[y] = new Array(10);

      for (var x =0; x < 10; x++) {
        squares[y][x] = new Object();
      }
    }
  }
}

