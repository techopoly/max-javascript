const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}
button.addEventListener('click', trackUserHandler);

// 17(5)
function function2(posData) {
  console.log(posData)
}

//function1();
navigator.geolocation.getCurrentPosition(function2)

navigator.geolocation.getCurrentPosition(function2.bind(null, 'something'))/* this one comes first in the console as 
it completes first and gets reusteres in the message queue first */
//navigator.geolocation.getCurrentPosition(function2.bind(null, something)) 
/* this will log 'something is not defined. and yes
something is not defined in the scope where we are calling the function from */

console.log('--------------------------')

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
//function1(f1.bind(null, name)) 
/* name is not defined as
name is not defined in the scope where we are calling the function from */
function1(f1); // this is alright we are not passing any data right now. when its called in line 32, we pass data


/* now i will prove that when we use a loop, if the loop is so long to complete than the other codes after that 
loop are blocked and starts to run once that loop completes */
let result = 0
  console.log(result)

  for (let i = 0; i < 10000; i++) {
    result += i;
    console.log('result')
  }
  console.log(result)

console.log('my name is tasin')


/* see the console while running the script and observe. you can put this block of code at the top and
see that the loop keeps running and other scripts dont run until the loop completes. so this for loop is not
async */