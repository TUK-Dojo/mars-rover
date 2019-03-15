import Direction from './direction';
import Planet from './planet';

class Rover {
  constructor(location, gridMax) {
    this.planetLocation = new Planet(location[0], location[1], gridMax);
    this.roverDirection = new Direction(location[2]);
  }

  get direction() {
    return this.roverDirection.getLabel();
  }

  get xPosition() {
    return this.planetLocation.xPosition;
  }

  get yPosition() {
    return this.planetLocation.yPosition;
  }

  moveBackward() {
    this.planetLocation.move(this.roverDirection.getInverseLabel());
  }

  moveForward() {
    this.planetLocation.move(this.direction);
  }

  rotateLeft() {
    this.roverDirection.rotateLeft();
  }

  rotateRight() {
    this.roverDirection.rotateRight();
  }
}

export default Rover;
