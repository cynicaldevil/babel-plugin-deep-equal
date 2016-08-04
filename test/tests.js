const assert = require('chai').assert;
import deep_equal from '../src/deep_equal_fn';

describe('deep Equal', () => {
  it('should check if two strings are equal or not', () => {

    assert.equal(deep_equal('asdfghjkl', 'asdfghjkl'), true);
    assert.equal(deep_equal('asdfghjkl', 'qwertyuiop'), false);

  });

  it('should check if two numbers are equal or not', () => {

    assert.equal(deep_equal(12345, 12345), true);
    assert.equal(deep_equal(12345, 67890), false);

  });

  it('should check if two flat objects are equal or not', () => {

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

  it('should check if nested objects are equal or not', () => {
    let obj1 = {
      prop1: 'value',
      prop2: {
        nestedProp1: 'qwerty',
        nestedProp2: false
      },
      prop3: 123
    };

    let obj2 = {
      prop1: 'value',
      prop2: {
        nestedProp1: 'qwerty',
        nestedProp2: false
      },
      prop3: 123
    };

    assert.equal(deep_equal(obj1, obj2), true);

    // change value of a property in a nested object
    obj2.prop2.nestedProp1 = 'asdfg';
    assert.equal(deep_equal(obj1, obj2), false);
  });

  it('should check if two functions are equal or not', () => {
    const func1 = (param1, param2) => {
      console.log(param1, param2);
    };

    let func2 = (param1, param2) => {
      console.log(param1, param2);
    };

    assert.equal(deep_equal(func1, func2), true);

    // changed number of parameters
    func2 = (param1) => {
      console.log(param1, param2);
    };

    assert.equal(deep_equal(func1, func2), false);

  });
});
