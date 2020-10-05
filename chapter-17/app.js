const button = document.querySelector('button');
const output = document.querySelector('p');

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

async function set(duration){
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('done')
    },
    duration)
  })
  return promise
}

async function trackUserHandler() {
  const position = await getPosition()
  const timerData = await set(2000);
  console.log(timerData, position)
}


button.addEventListener('click', trackUserHandler)
