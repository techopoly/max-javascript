const button = document.querySelector('button');
const output = document.querySelector('p');
//17-15: WE WILL LEARN SOME METHODS RELATED TO 'Promise'. Dont need to remember them. Just be aware of them
//promisify geolocation method

async function getPosition() {
  const promise = new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        res(pos)
      },
      error => {
        rej(error)
      })
  })
  return promise
}
//promisify setTimeout method
async function set(duration) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('done')
    },
      duration)
  })
  return promise
}

// Promise.race(): the one that completes execution first can pass the data. the ohter ones data is not passed
// function trackUserHandler(){
//   Promise.race([getPosition(), set(2000)]).then(data => {
//     console.log(data)
//   })
// }

//Promise.all(). passes all the data of each function as array in the order they are placed in all([]) array.
/* if one of its promise is rejected then the whole is canceled. we get an error */
// function trackUserHandler(){
//   Promise.all([getPosition(), set(2000)]).then(allData => {
//     console.log(allData)
//   })
// }

// the way around is Promise.allSettled. 
/* this one does not cancel the exeution of other promises if one of the promise is rejected, instead gives you
a detailed summary of which promise failed and passes the data of passed promises  */

function trackUserHandler(){
  Promise.allSettled([getPosition(), set(2000)]).then(allData => {
    console.log(allData)
  })
}

button.addEventListener('click', trackUserHandler)
