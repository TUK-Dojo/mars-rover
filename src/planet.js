const getNewPosition = (position, modifier, limit) => (position + modifier) % (limit + 1);

class Planet {
  constructor(location, gridMax) {
    [this.maximumX, this.maximumY] = gridMax;
    [this.xPosition, this.yPosition] = location;
  }

  move(direction) {
    const moveCommands = {
      N: () => [this.xPosition, getNewPosition(this.yPosition, 1, this.maximumY)],
      E: () => [getNewPosition(this.xPosition, 1, this.maximumX), this.yPosition],
      S: () => [this.xPosition, getNewPosition(this.yPosition, this.maximumY, this.maximumY)],
      W: () => [getNewPosition(this.xPosition, this.maximumX, this.maximumX), this.yPosition],
    };
    [this.xPosition, this.yPosition] = moveCommands[direction]();
  }
}

export default Planet;
