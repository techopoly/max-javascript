const button = document.querySelector('button');
const output = document.querySelector('p');

// 17(9)
// now lets promisify the location method
function getPosition() {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(posData => {  
      resolve(posData)
    },
      error => {
        console.log('error')
      })
  })
  return promise
}


function setTimer(duration) {
  const promise = new Promise((resolve, reject) => { //  this inside function is executed right after creating the promice object
    setTimeout(() => {
      resolve('done!')
    },
      duration)
  })
  return promise
}

function trackUserHandler() {
  getPosition().then(pos => {
    setTimer(2000).then(data => {
      console.log(data, pos)
    })
  })
}

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(posData => {
//     setTimer(2000).then(data => {
//       console.log(data, posData)
//     })
//   },
//     error => {
//       console.log('error')
//     })
// }

button.addEventListener('click', trackUserHandler);



