import Rover from './rover';
import CommandProcessor from './commandProcessor';

const controller = (initialPosition, commands, gridMax = [20, 20]) => {
  const rover = new Rover(initialPosition, gridMax);
  const processor = new CommandProcessor(rover);
  commands.forEach(command => processor.execute(command));
  return {
    history: processor.locationHistory,
    location: [rover.xPosition, rover.yPosition, rover.direction],
  };
};

export default controller;
