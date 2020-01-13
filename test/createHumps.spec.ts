import { camelCase, snakeCase } from 'lodash/fp';
import { describe, it } from 'mocha';
import { assert } from 'chai';
import { createHumps } from '../src';
import { basicObj, basicRes } from './mock';

const humps = createHumps(camelCase);
const snakes = createHumps(snakeCase);

describe('createHumps', function() {
  it('test default humps', function() {
    assert.deepEqual(humps(basicObj), basicRes);
  });

  it('test default snakes', function() {
    assert.deepEqual(snakes(basicRes), basicObj);
  });
});
