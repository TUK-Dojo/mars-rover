const getNewPosition = (position, modifier, limit) => (position + modifier) % (limit + 1);

class Planet {
  constructor(x, y, max) {
    [this.maximumX, this.maximumY] = max;
    this.xPosition = x;
    this.yPosition = y;
  }

  move(direction) {
    const moveCommands = {
      N: () => {
        this.yPosition = getNewPosition(this.yPosition, 1, this.maximumY);
      },
      E: () => {
        this.xPosition = getNewPosition(this.xPosition, 1, this.maximumX);
      },
      S: () => {
        this.yPosition = getNewPosition(this.yPosition, this.maximumY, this.maximumY);
      },
      W: () => {
        this.xPosition = getNewPosition(this.xPosition, this.maximumX, this.maximumX);
      },
    };
    moveCommands[direction]();
  }
}

export default Planet;
