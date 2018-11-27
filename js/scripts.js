// const title = document.querySelector('#title');
//
// title.textContent = 'My page Title';
// title.textContent = prompt('What is the page title?');
// // title.innerHTML = '<h1>My title</h1>';
//
// const add = document.querySelector('#add');
// add.textContent = prompt('What do you need to do?');
// //
// // document.creatElement('h1');
// // document.body.appendChild(title);
// // title.textContent = 'Our title';
//
// const item1 = document.creatElement('li');
// item1.textContent = 'Bella';
//
// const item2 = document.creatElement('li');
// item2.textContent = 'Simba';
//
// const item3 = document.creatElement('li');
// item3.textContent = 'Precious';
//
// // list.append(item1, item2, item3);
// //
// // const js = document.querySelector('script');  changes the place on the doc
// // document.body.insertBefore(title, js); the tag you want to put it before
// // generate elemnet, give it value, and attach to the page!!!!!!!
//
// const button = document.createElement('button');
// button.textContent = 'Add To Do';
// button.id = 'my-button';
// button.className = 'btn btn-success';
// button.classList.replace('btn-success', 'btn-info');
// document.body.appendChild(button);
//
// title.classList.add('text-center');
//
// // button.classList.remove('btn-info');
// button.addEventListener('click',() => {
//   title.classList.toggle('hidden');
// })

// we can add atributes

// button.removeAttribute('disabled');

// cat1.dataset.id = 1; to tack on an id to that item and have acess for later

// try this
// document.body.innerHTML = `
// <h1 class="text-center>"Hello world"</h1>
// <nav>
// <a>Home</a>
// </nav`;

//fizz buzz
 // loop between 2 numbers, if number is a multiple of 3 log fizz, multiple of 5 log buzz, both log fizz buzz, if none log numbers
 //
 // const number = ();
 // console.log(number);

 function fizzBuzz(){
   for(let i = 1; i <= 100; i++){
     if(i % 3 === 0 && i % 5 === 0){
       const p = document.createElement('p');
       p.textContent = `${i} FizzBuzz`
       // console.log(i, "FizzBuzz");
       document.body.appendChild(p);
       else if (i % 5 === 0){
           // console.log(i, "Buzz");
         } else if (i % 3 === 0){
           // console.log(i, "Fizz");
         }
       }
     }
   }

 }
 fizzBuzz();
