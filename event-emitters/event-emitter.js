// import events module
const EventEmitter = require('events');

// create custom Event Emitter class
const Person = class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  hello() {
    console.log(`Hello ${this.name}`);
  }
};

// instance of Person
const pedro = new Person('Pedro');

// add 'start' listener to emitter
pedro.on('start', () => {
  pedro.hello();
});

// trigger the 'start' event
pedro.emit('start');
