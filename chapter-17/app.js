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
        reject(error)
      })
  })
  return promise
}


function setTimer(duration, pos) {
  const promise = new Promise((resolve, reject) => { //  this inside function is executed right after creating the promice object
    setTimeout(() => {
      resolve(pos)
    },
      duration)
  })
  return promise
}

function trackUserHandler() {
  getPosition()
    .then(pos => {
      return setTimer(2000, pos) //max passed the position in a different way
    })
    .catch(err => {
      console.log(err);
      return 'position not found'   
    })
    .then((position) => {
      console.log(position)
    })
}

button.addEventListener('click', trackUserHandler);














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