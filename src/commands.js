export class RoverCommand {
  constructor(rover) {
    this.rover = rover;
  }
}

export class RoverMoveForward extends RoverCommand {
  execute() {
    this.rover.moveForward();
  }
}

export class RoverMoveBackward extends RoverCommand {
  execute() {
    this.rover.moveBackward();
  }
}

export class RoverTurnLeft extends RoverCommand {
  execute() {
    this.rover.rotateLeft();
  }
}

export class RoverTurnRight extends RoverCommand {
  execute() {
    this.rover.rotateRight();
  }
}
