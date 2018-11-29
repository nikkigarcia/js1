// console.log(document.forms[1]);
// bracket notation['login-form']
// dot notation .loginform
// console.log(document.forms.loginForm.button);
//
// const btn =document.forms.loginForm.button;
//
// btn.addEventListener('click', e => {
//   const firstName = document.forms.loginForm.firstName;
//   e.preventDefault();
//   console.log('clicked');
//   console.log(firstName.value);
//   firstName.value = '';
// })

// Javascript This

// console.log(this);
// this is an object and method
const person = {
  name: 'Nikki',

  sayName(){
    // console.log(this.name);
    console.log(this);
  }
};
person.sayName();
// left of the dot for call site

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
// going to write a function called log this
btn1.addEventListener('click', logThis);
btn1.addEventListener('click', logThis);
// this.style.display = 'none'; this will delete a button
function logThis (){
  console.log(this);
}

// to loop through an array and delete each button
// buttons.forEach(button => button.addEventListener('click', function(){
//   this.style.display= 'none';
// }))

const dog = {
  name: 'Bella',
  says: 'wolf'
}

const cat = {
  name: 'She-Ra',
  says: 'meow'
}

const baldeagle ={
  name: 'freedom',
  says: 'Bakaw'
}

function speak(location) {
  alert(`${this.name} says: ${this.says} from ${location}`);
}
speak.call(dog, 'from the yard');
speak.call(cat);
speak.call(baldeagle);

//  speak.apply will do the same thing but you need and array with brackets[]
// .bind is similar to call but you can redefine the function like dogSays();

// constructors help build a class
