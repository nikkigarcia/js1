// console.log('javascript loaded');
// const username = prompt('whats your username?');
// const password = prompt('set your password?');
//
// function mySetItem(){
//  console.log('mySetItem');
//  localStorage.setItem('user', username);
//  localStorage.password = password;
//  console.log(password);
// }
//
// function myGetItem(){
// const userValue = alert(localStorage.getItem('user'));
//  //localStorage.user = alert(user);
//  //alert(localStorage.user);
//  //alert(localStorage.getItem('password'));
//
//
// }
//
// function myClearItem(){
//  console.log(localStorage.removeItem('user'));
//  console.log(localStorage.removeItem('password'));
// }
//
// function(){
//   const foo = 'Are you sure about this?';
//   alert(foo);
//   console.log(foo);

}

// When the submit button is clicked on your todo form, get the user input and add it to an array

function someFn(){
  console.log(arguments);
}
// this is calling it...
someFn('Nikki', 30, 'red', true);

const arr1 = [1,2,3];
const arr2 = [4,5,6];
// combining arrays
console.log(arr1 + arr2);
console.log([...arr1, ...arr2]);


const todoList = ['dishes','mow lawn', 'put up christmas tree'];
console.log(todoList);

const firstItem = todoList[0];
consol.log(firstItem);
// objecty sturcture
const person = {
  name:'Nikki',
  age:30
  wife{
    name:'Nicole',
    age:31
  }
}
 const {name}= person;
 console.log(name);


 // Json javascript object notation
 // api application programing index ex like a server so you can grab data

 // fetch with promises
// after this promise resolves then I want you to

function getAllCharacters(url){
  fetch(url)
  // fetch("https://rickandmortyapi.com/api/character/")
    .then(response =>response.json())
    .then(data => makeCard(data))
    .catch(error => console.log(error))
}

getAllCharacters('https://rickandmortyapi.com/api/character/');

function makeCard(data){
  console.log(data);
  const characters = data.results;
  consol.log(characters);
}

// array itteration
// promises are asyncronist code async function getAllCharacters(url){const response=await fetch(url); const data= await response.json(); const pagination = data.info.next; if(pagination){getAllCharacters(pagination)} makeCard(data);}
characters.forEach(character => {
  const card = document.createElement('div');
  card.classList = 'card';
  card.innerHTML = `
<img class="card-img-top" src="${character.image}">
<div class="card-body">
  <h2> class="card-title">${character.name}</h2>
  <p class="card-text">Species: ${character.species}</p>
</div>

  `;
  document.body.append(card);
});


// angular is a superset of javascript called typedscript ex const name:str = 'nikki'; microsoft dev behind
// react biggest name on the block with facebook technology
// vue hugely popular in asia china and japan
// ember is an old frame work and doesn't break alot
// node back end javascript framework where you can write servers

// geekwiseacademy.github.io/intro-to-javascript
