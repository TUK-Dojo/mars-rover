/* global it, describe */
import chai from 'chai';

import roverController from '../src/roverController';

const { expect } = chai;

describe('Mars rover (single commands)', () => {
  it('Returns the starting position when no commands passed', () => {
    const roverLocation = roverController([10, 10, 'N'], []);
    expect(roverLocation).to.deep.equal([10, 10, 'N']);
  });

  it('Changes direction from N to E when only a R command is passed', () => {
    const roverLocation = roverController([10, 10, 'N'], ['R']);
    expect(roverLocation).to.deep.equal([10, 10, 'E']);
  });

  it('Changes direction from N to W when only a L command is passed', () => {
    const roverLocation = roverController([10, 10, 'N'], ['L']);
    expect(roverLocation).to.deep.equal([10, 10, 'W']);
  });

  it('Changes location from [10, 10, N] to [10, 11, N] when only a F command is passed', () => {
    const roverLocation = roverController([10, 10, 'N'], ['F']);
    expect(roverLocation).to.deep.equal([10, 11, 'N']);
  });

  it('Changes location from [10, 10, N] to [10, 9, N] when only a B command is passed', () => {
    const roverLocation = roverController([10, 10, 'N'], ['B']);
    expect(roverLocation).to.deep.equal([10, 9, 'N']);
  });
});

describe('Mars rover (sequences)', () => {
  it('Returns the starting orientation when four L commands are passed', () => {
    const roverLocation = roverController([10, 10, 'N'], ['L', 'L', 'L', 'L']);
    expect(roverLocation).to.deep.equal([10, 10, 'N']);
  });

  it('Moves to location [10, 20] when 10 F commands are passed. Remains there when one more F command is issued', () => {
    let roverLocation = roverController([10, 10, 'N'], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F']);
    expect(roverLocation).to.deep.equal([10, 20, 'N']);
    roverLocation = roverController([10, 10, 'N'], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F']);
    expect(roverLocation).to.deep.equal([10, 20, 'N']);
  });

  it('Moves from [10, 10, N] to [9, 13, S] when given the command sequence [F, F, L, F, L, B]', () => {
    const roverLocation = roverController([10, 10, 'N'], ['F', 'F', 'L', 'F', 'L', 'B']);
    expect(roverLocation).to.deep.equal([9, 13, 'S']);
  });
});
