const assert = require('assert');

// https://babeljs.io/docs/learn-es2015/

describe('Arrow function', function() {
  it('should both return 15 for 1 + 2 + 3 + ... + 5', function() {
    const actual1 = [1, 2, 3, 4, 5].reduce((x, y) => x + y);
    const actual2 = [1, 2, 3, 4, 5].reduce(function(x, y) {
      return x + y;
    });
    const expected = 15;
    assert.equal(expected, actual1);
    assert.equal(expected, actual2);
  });
});

describe('Class', function() {
  class Hero {
    constructor(name) {
      this.name = name;
    }

    greeting() {
      return 'Hello, my name is ' + this.name;
    }
  }

  it('should greet with hero name', function() {
    const hero = new Hero('Tracer');
    const actual = hero.greeting();
    const expected = 'Hello, my name is Tracer';
    assert.equal(expected, actual);
  });
});

describe('Destructuring', function() {
  it('should extract correct attributes', function() {
    const laptop = {
      brand: 'Dell',
      model: 'xps 13',
      price: 2000
    };

    const { brand, model, price } = laptop;

    assert.equal(laptop.brand, brand);
    assert.equal(laptop.model, model);
    assert.equal(laptop.price, price);
  });
});

describe('Template string', function() {
  it('should work as well as string concatenation', function() {
    const language = 'C++';

    const actual1 = 'I hate ' + language;
    const actual2 = `I hate ${language}`;
    const expected = 'I hate C++';

    assert.equal(expected, actual1);
    assert.equal(expected, actual2);
  });
});

describe('Default parameters', function() {
  it('should use default parameters if users do not provide them', function() {
    function withdraw(total, amount = 10) {
      return total - amount;
    }

    const actual = withdraw(100);
    const expected = 90;
    assert.equal(expected, actual);
  });
});

// https://babeljs.io/docs/plugins/
// this is just proposal (stage-1)
describe('Spread', function() {
  it('should work', function() {
    const hero = {
      name: 'Tracer',
      age: 22
    };

    const tracer = {
      ...hero,
      gender: 'female'
    };

    assert.equal('Tracer', tracer.name);
    assert.equal('22', tracer.age);
    assert.equal('female', tracer.gender);
  });
});
