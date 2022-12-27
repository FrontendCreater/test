const { sayHello } = require('./sayHello.js');

test('name Jest expect Hello, Jest!', () => {
  expect(sayHello('Jest')).toBe('Hello, Jest!');
});

test('name empty expect Hello, Anonim!', () => {
  expect(sayHello()).toBe('Hello, Anonim!');
});
