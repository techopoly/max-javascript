const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

// 17(5)
function function2(posData) {
  console.log(posData)  
}

// setTimeout(() => {
//   console.log('this is executed after 3 sec')
// }, 3000);

button.addEventListener('click', trackUserHandler);
//function1();
//navigator.geolocation.getCurrentPosition(function2)


//working on how the geoloacation uses the callback function and how to pass parameter

function function1(aFuntion){
  let name = 'ihmma'
  aFuntion(name);
  console.log('this is executed immediately')
}

function f1(name){
  console.log(name)
  }
function1(f1)