class Rover {
  constructor(location) {
    [this.x, this.y, this.dir] = location;
  }

  get direction() {
    return this.dir;
  }

  get xPosition() {
    return this.x;
  }

  get yPosition() {
    return this.y;
  }

  get location() {
    return [this.x, this.y, this.direction];
  }

  set direction(newDir) {
    this.dir = newDir;
  }

  set xPosition(newX) {
    this.x = newX;
  }

  set yPosition(newY) {
    this.y = newY;
  }
}

export default Rover;
