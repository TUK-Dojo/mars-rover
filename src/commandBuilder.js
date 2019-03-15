import {
  RoverTurnLeft,
  RoverTurnRight,
  RoverMoveForward,
  RoverMoveBackward,
} from './commands';

const COMMANDS = {
  L: rover => new RoverTurnLeft(rover),
  R: rover => new RoverTurnRight(rover),
  F: rover => new RoverMoveForward(rover),
  B: rover => new RoverMoveBackward(rover),
};

export default {
  build: (rover, command) => COMMANDS[command](rover),
};
