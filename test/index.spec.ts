import { noop } from 'lodash/fp';
import { describe, it } from 'mocha';
import { assert } from 'chai';
import humps from '../src/index';
// eslint-disable-next-line import/extensions
import { basicObj, basicRes } from './mock';

describe('humps', function() {
  const before = {
    'space key': 'space',
    // eslint-disable-next-line @typescript-eslint/camelcase
    underscore_key: basicObj,
    TXT: 'ONE MORE THING',
    // eslint-disable-next-line @typescript-eslint/camelcase
    foo_bar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: ['100% Acrylic'],
    'dispatch-func': noop,
  };
  const after = {
    spaceKey: 'space',
    underscoreKey: basicRes,
    txt: 'ONE MORE THING',
    fooBar: 'underscore',
    tests: 'ASTM D 4157-13',
    contents: ['100% Acrylic'],
    dispatchFunc: noop,
  };

  it('no string processing', function() {
    assert.deepEqual(humps('some string_yo'), 'some string_yo');
  });

  it('objects', function() {
    assert.deepEqual(humps(before), after);
  });

  it('array', function() {
    assert.deepEqual(humps([before, before]), [after, after]);
  });

  it('saves functions', function() {
    assert.deepEqual(humps(noop), noop);
  });
});
