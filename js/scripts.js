// javascript reads top to bottom
// document.createElement

// li text content
// append to the dom makes it appear on the app
// OBJECT DAY!!!!
// const str = new String ('Nikki');
//
// console.log(str);
// console.log(Object.getPrototypeOf(str)); if your not sure which protoype your working with
// const arr = new Array('Nikki', 30);
// console.log(arr);
//
// // prototypal inheritance
//
// const num = new Number(42);
// console.log(num);
//
// const bool= new Boolean(true);
// console.log(bool);
//
// const person = {
//   name: 'Billy Bob'
// };
//
// console.log(person);
//
// const dog = new Object();
// dog.name = 'Bella';
// console.log(dog);

// Try This
// when you name a constructor or class it needs to be capitalized
// function Animal(name, energy){
//   this.name = name;
//   this.enery = energy;
//   this.play = function(){
//     this.energy - = 5;
//   }
// }
// Animal.protoype.eat = function(){
//   this.energy += 10;
// }
//
//
//
// const dog = new Animal('dog',40);
// console.log(dog);
// const cat = new Animal('cat',5);
// console.log(cat);
// console.console.log(dog.name);
// dog.play();
// console.log(dog.enery);
// dog.eat();
// console.log(dog.eat);

// function Todo(text, isDone){
//   this.text = text
//   this.done = isDone
//   this.edit = function(){
//     this.text = new Todo();
//   }
// }
// const Username = prompt('What is your name?');
// console.log(User);
// const User = new User('name', 'password');

// function User(){
//   this.username = prompt('What is your name?');
//   this.password = prompt('What is your password?');
//
//   this.getName = function(){
//     this.name = prompt("What is your getName?");
//   }
//   this.getPassword = function(){
//     this.password = prompt('What is your password?');
//   }
// }
// nikki.getName();
// nikki.getPassword();

// const newUser = new User();
// console.log(newUser);

// console.log(name);

// classes!!!!!

class Animal {
  constructor(name, enery){
    this.name = name;
    this.enery = energy;

  }
play(){
  this.energy -=5;
}

}
// const dog = new Animal('fido', 64);
// console.log(dog);
// console.log(dog.energy);
// I want a new class call dog and it inherits things from Animal
class Dog extends Animal {
  constructor(name, energy, says){
    super(...arguments);

    this.says = says;
  }
}
speak(){
  console.log(`Dog says: ${this.says}`);
}
const fido = new Dog('fido', 40, 'woof');

console.log(fido.energy);
