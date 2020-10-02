const button = document.querySelector('button');
const output = document.querySelector('p');

// 17(9)

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



