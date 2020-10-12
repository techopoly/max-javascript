/* 23-5
now we will work on an api which is supported on the chrome browser but not on the edge. so we will find a way to 
work around that. 
*/

const button = document.querySelector('button');
const paragraph = document.querySelector('p')


button.addEventListener('click', () => {
  if (navigator.clipboard) {
    const text = paragraph.textContent
    navigator.clipboard.writeText(text).then(result => {
      console.log(result)
    })
      .catch(error => {
        console.log(error)
      })
  }
  else {
    alert('sorry browser doesnt support clipboard api !!')
  }
})


//conclusion: its better to show the user some sort of message for the apis that is not suppoort on the browser than
//not show anything and leaving the user clueless about the issue