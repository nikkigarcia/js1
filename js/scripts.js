console.log('javascript loaded');
const username = prompt('whats your username?');
const password = prompt('set your password?');

function mySetItem(){
 console.log('mySetItem');
 localStorage.setItem('user', username);
 localStorage.password = password;
 console.log(password);
}

function myGetItem(){
const userValue = alert(localStorage.getItem('user'));
 //localStorage.user = alert(user);
 //alert(localStorage.user);
 //alert(localStorage.getItem('password'));


}

function myClearItem(){
 console.log(localStorage.removeItem('user'));
 console.log(localStorage.removeItem('password'));
}

function(){
  const foo = 'Are you sure about this?';
  alert(foo);
  console.log(foo);

}

// When the submit button is clicked on your todo form, get the user input and add it to an array
