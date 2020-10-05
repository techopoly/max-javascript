const button = document.querySelector('button');
const output = document.querySelector('p');
//17-13: async await and error handling

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

async function trackUserHandler() {
  let position; // changing them from try block scope to one scope up
  let timerData;
  try {
    position = await getPosition()
    timerData = await set(2000);
  } catch (error) {
    console.log(error.message);
  }

  console.log(timerData, position)
}


button.addEventListener('click', trackUserHandler)
