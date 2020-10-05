const button = document.querySelector('button');
const output = document.querySelector('p');
//17-14: async await and error handling

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

/* one down side of async await is everything inside that async function is chained with then. So test it. lets add
other async functions inside trackUserHandler and see that those functions are executed only after the upper 
functions are done with execution */

async function trackUserHandler() {
  let position; // changing them from try block scope to one scope up
  let timerData;
  try {
    position = await getPosition()
    timerData = await set(2000);
  } catch (error) {
    console.log(error.message);
  }
  console.log(timerData, position);

  console.log('getting position'); /* in the .then() chaining this function doesnt depend on the execution of
  other function above this one. but in async await the will execute after the above functions are done executing.
  see the console if you dont believe me. also wathc the lecture if you dont understand the concept */
}

button.addEventListener('click', trackUserHandler)
