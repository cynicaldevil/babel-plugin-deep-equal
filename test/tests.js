const assert = require('chai').assert;
import deep_equal from '../src/deep_equal_fn';

describe('deep Equal', function() {
  it('should check if two strings are equal or not', function() {

    assert.equal(deep_equal('asdfghjkl', 'asdfghjkl'), true);
    assert.equal(deep_equal('asdfghjkl', 'qwertyuiop'), false);

  });

  it('should check if two numbers are equal or not', function() {

    assert.equal(deep_equal(12345, 12345), true);
    assert.equal(deep_equal(12345, 67890), false);

  });

  it('should check if two flat objects are equal or not', function() {

    let obj1 = {
      prop1: 'value',
      prop2: 456,
      prop3: true
    };

    let obj2 = {
      prop1: 'value',
      prop2: 456,
      prop3: true
    };

    assert.equal(deep_equal(obj1, obj2), true);

    obj2.prop2 = 123;

    assert.equal(deep_equal(obj1, obj2), false);

  });
});
