const CARDINAL = ['N', 'E', 'S', 'W'];
const DIRECTION = { Left: CARDINAL.length - 1, Invert: CARDINAL.length / 2, Right: 1 };

const getNewDirection = (dir, modifier) => (dir + modifier) % CARDINAL.length;

class Direction {
  constructor(dir) {
    this.dir = CARDINAL.indexOf(dir);
  }

  getInverseLabel() {
    return CARDINAL[getNewDirection(this.dir, DIRECTION.Invert)];
  }

  getLabel() {
    return CARDINAL[this.dir];
  }

  rotateLeft() {
    this.dir = getNewDirection(this.dir, DIRECTION.Left);
  }

  rotateRight() {
    this.dir = getNewDirection(this.dir, DIRECTION.Right);
  }
}

export default Direction;
