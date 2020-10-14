/* 23-8
we will use both babel for browser support of differnt javascript features and polyfill for using the
advanced concepts like promises that can be made by older syntax with a diff approach
but to do that we need a npm library core-js(stores all the polyfills) which is a lot bigger than our entire project. so to solve
that problem we will use the specific feature that we need from core-js.but now there arises another problem
which is we still need to manually import all the features. to avoid that we will tell babel to 
do auto polyfilling for us, in other word automaically import the polyfills that our application needs.
we change that at webpackl.config file.
*/
//import 'core-js/features/promise'
const button = document.querySelector('button');
const paragraph = document.querySelector('p')

const  promise = new Promise();// adding this just to test if babel automatically adds polyfills for this promise
console.log(promise) 
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

