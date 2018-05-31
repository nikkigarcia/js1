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
// today.splice(2, 1); second parameter is the amout you want to delete after the splice

const products = [['blanket',12.99]]
let copy = products.slice(); //to make a copy for frame works like react
console.log(today.indexOf(2006));//use indexOf/lastIndexOf to find out the index and then you can splice out
//today.reverse(); console.log(today); to reverse array lisst
//today.sort(); console.log(today); will alpha numerically sort array with firt charachter num then letter
//alert(products[0][1]); =12.99

let favoriteMovie = ['Bruce Almighty', 'Bruce'];
let secondFav = ['The Proposal'];
let thirdFav = ['21 Jumpstreet'];

let favoriteMovies = [];

favoriteMovies.push(favMovie, secondFav, thirdFav);

let titles = [];
titles.push(favoriteMovies[0] [0], favoriteMovies [1] [0]);
