/* global it, describe, beforeEach, afterEach  */
import chai from 'chai';
import sinon from 'sinon';

import marsRover from '../src/rover';

const { expect } = chai;

let sandbox;

beforeEach(() => {
  sandbox = sinon.createSandbox();
});

afterEach(() => {
  sandbox.restore();
});

describe('Mars rover', () => {
  it('', () => {
  });
});
