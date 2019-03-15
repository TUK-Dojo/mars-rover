import { RoverCommand } from './commands';
import CommandBuilder from './commandBuilder';

class CommandProcessor extends RoverCommand {
  constructor(rover) {
    super(rover);
    this.locationHistory = [];
  }

  execute(command) {
    this.locationHistory.push(this.rover.location);
    CommandBuilder.build(this.rover, command).execute();
  }
}

export default CommandProcessor;
