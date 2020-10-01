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
navigator.geolocation.getCurrentPosition(function2)


//working on how the geoloacation uses the callback function and how to pass parameter
function f1(data) {
  console.log(data)
}

function function1(aFuntion) {
  let name = 'ihmma'
  aFuntion(name);
}

function1(f1.bind(null, 'name')) /* i think bind completely reassingns new argument. because if we have 'name' inside
aFunction as aFunction(name) we see the string is taken as the argument not the name variable.  */
function1(f1.bind(null, name)) /* name is not defined as
name is not defined in the scope where we are calling the function from */ 

navigator.geolocation.getCurrentPosition(function2.bind(null, 'something'))
navigator.geolocation.getCurrentPosition(function2.bind(null, something)) /* this will log 'something is not defined. and yes
something is not defined in the scope where we are calling the function from */ 

