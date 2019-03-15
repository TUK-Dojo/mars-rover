/* global it, describe */
import chai from 'chai';

import roverController from '../src/roverController';

const { expect } = chai;

describe('Mars rover (single commands)', () => {
  it('Returns the starting position when no commands passed', () => {
    const rover = roverController([10, 10, 'N'], []);
    expect(rover.location).to.deep.equal([10, 10, 'N']);
  });

  it('Changes direction from N to E when only a R command is passed', () => {
    const rover = roverController([10, 10, 'N'], ['R']);
    expect(rover.location).to.deep.equal([10, 10, 'E']);
  });

  it('Changes direction from N to W when only a L command is passed', () => {
    const rover = roverController([10, 10, 'N'], ['L']);
    expect(rover.location).to.deep.equal([10, 10, 'W']);
  });

  it('Changes location from [10, 10, N] to [10, 11, N] when only a F command is passed', () => {
    const rover = roverController([10, 10, 'N'], ['F']);
    expect(rover.location).to.deep.equal([10, 11, 'N']);
  });

  it('Changes location from [10, 10, N] to [10, 9, N] when only a B command is passed', () => {
    const rover = roverController([10, 10, 'N'], ['B']);
    expect(rover.location).to.deep.equal([10, 9, 'N']);
  });
});

describe('Mars rover (sequences)', () => {
  it('Returns the starting orientation when four L commands are passed', () => {
    const rover = roverController([10, 10, 'N'], ['L', 'L', 'L', 'L']);
    expect(rover.location).to.deep.equal([10, 10, 'N']);
  });

  it('Moves to location [10, 20] when 10 F commands are passed. Wraps around to [10, 0] when one more F command is issued', () => {
    let rover = roverController([10, 10, 'N'], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F']);
    expect(rover.location).to.deep.equal([10, 20, 'N']);
    rover = roverController([10, 10, 'N'], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F']);
    expect(rover.location).to.deep.equal([10, 0, 'N']);
  });

  it('Moves from [10, 10, N] to [9, 13, S] when given the command sequence [F, F, L, F, L, B]', () => {
    const rover = roverController([10, 10, 'N'], ['F', 'F', 'L', 'F', 'L', 'B']);
    expect(rover.location).to.deep.equal([9, 13, 'S']);
  });
});

describe('Mars rover (alternate grid sizes)', () => {
  it('With grid size [5,5] moves to [2,2,E] from [1,2,E] when a F command is passed', () => {
    const rover = roverController([1, 2, 'E'], ['F'], [5, 5]);
    expect(rover.location).to.deep.equal([2, 2, 'E']);
  });

  it('With grid size [15,15] moves to [-1,-1,W] from [0,0,S] when a [F, R, F] commands are passed', () => {
    const rover = roverController([0, 0, 'S'], ['F', 'R', 'F'], [15, 15]);
    expect(rover.location).to.deep.equal([15, 15, 'W']);
  });
});

describe('Mars rover (history)', () => {
  it('With grid size [5,5] an origin of [1,2,E] and commands [F,F,F] returns history of [[1,2,E],[2,2,E],[3,2,E]] and a final position of [4,2,E]', () => {
    const rover = roverController([1, 2, 'E'], ['F', 'F', 'F'], [5, 5]);
    expect(rover.location).to.deep.equal([4, 2, 'E']);
    expect(rover.history).to.deep.equal([[1, 2, 'E'], [2, 2, 'E'], [3, 2, 'E']]);
  });
});
