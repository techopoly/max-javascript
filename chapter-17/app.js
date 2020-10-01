const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}
function function1(){
  console.log('this is executed immediately')
}

setTimeout(() => {
  console.log('this is executed after 3 sec')
}, 3000);

button.addEventListener('click', trackUserHandler);
function1();