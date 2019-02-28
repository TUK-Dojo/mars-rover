import {
  RoverTurnLeft,
  RoverTurnRight,
  RoverMoveForward,
  RoverMoveBackward,
} from './commands';

export default {
  build: (rover, command, grid) => {
    switch (command) {
      case 'L':
        return new RoverTurnLeft(rover, grid);
      case 'R':
        return new RoverTurnRight(rover, grid);
      case 'F':
        return new RoverMoveForward(rover, grid);
      case 'B':
        return new RoverMoveBackward(rover, grid);
      default:
        throw new Error('Received unexpected command');
    }
  },
};
