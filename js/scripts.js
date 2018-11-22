const header = document.querySelector('#header');
console.log(header);

header.addEventListener('click', event => header.style.color = 'red');

header.addEventListener('mouseover', event => header.style.backgroundColor = 'pink');

document.addEventListener('keydown' event => {
if(event.key === 'Enter') {
  alert('You hit the enter key.');
}

  header.style.color = 'tomato';
})
const btn = document.querySelector('#btn');
button.addEventListener('click'() => alert('Button clicked!'));
document.addEventListener('keyup',() => container.style.background = 'lightgreen');

document.addEventListener('click', () => window.location.assign('https://www.facebook.com'));
const buttons = document.querySelectorAll('button');
for(let button of buttons) {
  buttons.addEventListener('click', () => alert('You clicked me.'));
}
buttons.forEach(button => button.addEventListener('click', () => alert('Clicked')));
// event.target.innerText to delete
