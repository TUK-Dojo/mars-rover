const CARDINAL = ['N', 'E', 'S', 'W'];
const LEFT = CARDINAL.length - 1;
const INVERT = CARDINAL.length / 2;
const RIGHT = 1;

const getNewDirection = (dir, modifier) => (dir + modifier) % CARDINAL.length;

class Direction {
  constructor(dir) {
    this.dir = CARDINAL.indexOf(dir);
  }

  getInverseLabel() {
    return CARDINAL[getNewDirection(this.dir, INVERT)];
  }

  getLabel() {
    return CARDINAL[this.dir];
  }

  rotateLeft() {
    this.dir = getNewDirection(this.dir, LEFT);
  }

  rotateRight() {
    this.dir = getNewDirection(this.dir, RIGHT);
  }
}

export default Direction;
