// let inside = true;
//
// if(inside){
//   console.log('i am inside')
// } else{
//   console.log('i am not inside')
// }
//
// //condition ? expresion1 : expression2
//
// let example2 = inside ? "I am inside": "i am not inside"
// console.log(example2)
//
// let number = 10
//
// console.log((number > 20) ? "number is greater than 20" : "number is less than 20")
//
// let number = 15;
//
// console.log(number > 10 ? "number is greater" : "number is less than")
//
// let name = false;
// let email = true;
//
// if(name) {
//   alert("I have name")
// }
// else if (email) {
//   console.log("i have email")
// }
// else {
//   console.log("i have none")
// }
//
// name ? "i have name" : "i have email" : "i have none"
// console.log(name ? "i have name" : "i have email" : "i have none")

// let iAmHungry = true;
// let money = 5;
//
// iAmHungry ? ((money > 10)? "i am hungry and i have more than 10" : "i am hungry and i have less than 10") :((money >10) ? "i am not hungary and i hve more than 10" : "i am not jungry and i have less than 10")
//
// // console.log(hungry)
//  if (iAmHungry) {
//    if(money > 10){
//      'i am hungry and i have more than 10'
//    }
//    else{
//      'i am hungry and i have less than 10'
//    }
// }else{
//    if(money > 10) {
//      'i am not hungry and i have more than 10'
//    }
//    else{
//      'i am not hungry and i have less than 10'
//    }
//  }
// let arr = ["javascript", 100, {}, [], true];
//
// console.log(arr.length);//5

var today = ["Get Out", 4, false, 2006];
console.log(today, today.length);//Array.isArray to find out if it is an array

today.push("Pizza");
console.log(today);

today.unshift("pizza");//add to beginning
console.log(today);

//access last member of array
console.log(today[today.length - 1]);

//remove Array (a bucket where you can hold lots of data)
today.pop();//assumes you want to remove last index
//console.log(today.pop()) to see what you deleted
today.shift();// removes first membeer

today.splice(2, 1, false, "new");// remove starting at index 2 and everything after
console.log(today, "this is the result of a splice")
// today.splice(2, 1); second parameter is the amount you want to delete after the splice

const products = [['blanket',12.99]]
let copy = products.slice(); //to make a copy for frame works like react
console.log(today.indexOf(2006));//use indexOf/lastIndexOf to find out the index and then you can splice out
//today.reverse(); console.log(today); to reverse array lisst
//today.sort(); console.log(today); will alpha numerically sort array with firt charachter num then letter
//alert(products[0][1]); =12.99

let favoriteMovie = ['Bruce Almighty', 'Bruce'];
let secondFav = ['The Proposal', 'Ben'];
let thirdFav = ['21 Jumpstreet', 'Jeff'];
let fourthFav = ['The Note Book', 'Noah']

let favoriteMovies = [favMovie, secondFav, thirdFav, fourthFav];

favoriteMovies.push(favMovie, secondFav, thirdFav, fourthFav);
alert(favoriteMovies);
let titles = [];
titles.push(favoriteMovies[0] [0], favoriteMovies [1] [0]);
alert(titles);
console.log('least fav', thirdFav);
alert(favoriteMovies.length);

const names = ['Nikki', 'Keda', 'Jesus', 'Naomi', 'Adrian', 'Baby'];

const parents = names.slice(0,2);
const nums = [1,2,3,4,5,'nikki',6,7,8,9,20];
nums.indexOf('nikki');
// will return -1 if not a part of index

const luckyNums = [2,4,12,15,21,31,6,25,2];
luckyNums.indexOf(2);
// will return the first instance of a duplicate number or word

const str = 'racecar';
str === str.split('').reverse().join('')
names.sort();
// alphabetical order

// // loops
// no point in using while or do while cuz its old school
for(let i = 0; i < = 10,; i++){
  console.log('Nikki');
}
const names = ['Nicole','Islatia', 'Jewel', 'Leigh'];

for(let i = 0; i < names.length; i++){
 console.log(names[i]);
}
// this list out names

for(let name of names){
  console.log(name);
}
// this is easier to list out names
// one down side is you can't leave out first or last names...
names.forEach(name => console.log(name));
// I want to take this array and look at each number
names.forMap(name => console.log(name));
// objects uses curly braces V
const person = {
  name: 'Nikki',
  age: 30
};
console.log(person);

for(let key in Person){
  console.log(person[key]);
}
console.log(person.name);
const user = {};
user.name = prompt('What is your name?');
user.age = prompt('How old are you?');
consol.log(user);
// returns both nikki and 29 if you only want name consol.log(user.name);

for(let favoriteMovie of favoriteMovies){
  console.log(favoriteMovie);
}
alert(favoriteMovie.year);
