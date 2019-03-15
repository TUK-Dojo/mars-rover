import Direction from './direction';
import Planet from './planet';

class Rover {
  constructor(location, gridMax) {
    this.planetLocation = new Planet(location, gridMax);
    this.roverDirection = new Direction(location[2]);
  }

  get location() {
    return [
      this.planetLocation.xPosition, this.planetLocation.yPosition, this.roverDirection.getLabel(),
    ];
  }

  moveBackward() {
    this.planetLocation.move(this.roverDirection.getInverseLabel());
  }

  moveForward() {
    this.planetLocation.move(this.roverDirection.getLabel());
  }

  rotateLeft() {
    this.roverDirection.rotateLeft();
  }

  rotateRight() {
    this.roverDirection.rotateRight();
  }
}

export default Rover;
