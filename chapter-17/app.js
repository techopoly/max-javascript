const button = document.querySelector('button');
const output = document.querySelector('p');

// 17(8)

function setTimer(duration) {
  const promise = new Promise((resolve, reject) => { //  this inside function is executed right after creating the promice object
    setTimeout(() => {
      resolve('done!')
    },
      duration)
  })

  return promise
}

function trackUserHandler(){
  navigator.geolocation.getCurrentPosition(posData => {
      setTimer(2000).then(data => {
        console.log(data, posData)
      })
  },
  error => {
    console.log('error') 
  })
}

/* lets do the same in trivial way */
// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition((posData) => {
//     setTimeout(() => {
//       console.log(posData)
//     }, 2000)
//   })
// }

button.addEventListener('click', trackUserHandler);







console.log('---------------------')

// other insight gained from this section
// very very very important concept.
/* i know it but i make mistake when things get complicated. see below explanation next to each line */
let name = 'ishmam'

function a(c1) {
 c1();
}

a((name) => { /* this name is not the 'name' variable declared above.  when we pass the parameter in function 
definition it has nothing to do with other variables with same name*/
  console.log(name) 
})

function b(name){ /* this name is not the 'name' variable declared above.  when we pass the parameter in function 
definition it has nothing to do with other variables with same name*/
  console.log(name)
}

b();
a(() => {
  console.log(name); /* this will log 'ishmam' as we are using the name variable decalred above. instead of passing
any new argument. this callback function is inside the same scope where the name variable is declared and thats why
we can access that inside the callback function */
})

