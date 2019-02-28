import Rover from './rover';
import processor from './commandProcessor';
import CommandBuilder from './commandBuilder';
import PlanetGrid from './grid';

const controller = (initialPosition, commands, grid = [20, 20]) => {
  const rover = new Rover(initialPosition);
  const planet = new PlanetGrid(grid);
  commands.forEach((command) => {
    processor(CommandBuilder.build(rover, command, planet));
  });
  return rover.location;
};

export default controller;
