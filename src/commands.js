class RoverCommand {
  constructor(rover, grid) {
    this.rover = rover;
    this.grid = grid;
  }

  execute() {
    console.log('Executing abstract rover command on rover ', this.rover);
  }
}

const GRID_MAX = 20;
const GRID_MIN = 0;
const incrementPosition = pos => (pos < GRID_MAX ? pos + 1 : pos);
const decrementPosition = pos => (pos > GRID_MIN ? pos - 1 : pos);

export class RoverMoveForward extends RoverCommand {
  execute() {
    switch (this.rover.direction) {
      case 'N':
        this.rover.yPosition = incrementPosition(this.rover.yPosition);
        break;
      case 'E':
        this.rover.xPosition = incrementPosition(this.rover.xPosition);
        break;
      case 'S':
        this.rover.yPosition = decrementPosition(this.rover.yPosition);
        break;
      case 'W':
        this.rover.xPosition = decrementPosition(this.rover.xPosition);
        break;
      default:
        throw new Error('Rover has invalid current direction');
    }
  }
}

export class RoverMoveBackward extends RoverCommand {
  execute() {
    switch (this.rover.direction) {
      case 'N':
        this.rover.yPosition = decrementPosition(this.rover.yPosition);
        break;
      case 'E':
        this.rover.xPosition = decrementPosition(this.rover.xPosition);
        break;
      case 'S':
        this.rover.yPosition = incrementPosition(this.rover.yPosition);
        break;
      case 'W':
        this.rover.xPosition = incrementPosition(this.rover.xPosition);
        break;
      default:
        throw new Error('Rover has invalid current direction');
    }
  }
}

const ROVER_DIRECTIONS = ['N', 'E', 'S', 'W'];
const directionIndex = direction => ROVER_DIRECTIONS.indexOf(direction);

export class RoverTurnLeft extends RoverCommand {
  execute() {
    if (directionIndex(this.rover.direction) === 0) {
      this.rover.direction = ROVER_DIRECTIONS[ROVER_DIRECTIONS.length - 1];
    } else {
      this.rover.direction = ROVER_DIRECTIONS[directionIndex(this.rover.direction) - 1];
    }
  }
}

export class RoverTurnRight extends RoverCommand {
  execute() {
    if (directionIndex(this.rover.direction) === ROVER_DIRECTIONS.length - 1) {
      this.rover.direction = [ROVER_DIRECTIONS];
    } else {
      this.rover.direction = ROVER_DIRECTIONS[directionIndex(this.rover.direction) + 1];
    }
  }
}
