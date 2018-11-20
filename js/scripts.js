const cat = 'celestia';
// sub string
// index for each leter
console.log(cat.substr(2,2));
// l e
// similar to splice except you can use for stings
// write a function that calculates a dog's age
function calDogYears(dogAge){
  alert(dogAge*7);
}
calDogYears(+prompt(How many years has your dog been alive?));

function calcLifetimeSupply(currentAge, product, maxAge){
alert(((maxAge-currentAge) *365)*product);
}
calcLifetimeSupply(+prompt(30, 5, 42);

function calcBaseballTeamName(arr){
  alert(arr.join(''));
  // prompt('What town are you from?', 'Weather?', )
}
const arr = ['Fresno,' 'Thunder', 'Cats'];
// calcBaseballTeamName(+prompt('Fresno,' 'Thunder', 'Cats'));

// method is associated with an object almost identical to a function

class Person {
  name = 'Nikki';

  sayName(){
    console.log(name);
  }
}

const Nikki = new Person
