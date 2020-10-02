const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

// 17(8)
function function2(posData) {
  console.log(posData)
}
/* set timeout has no promise version */
// setTimeout(() => {
//   console.log('this is executed after 3 sec')
// }, 3000);

button.addEventListener('click', trackUserHandler);


