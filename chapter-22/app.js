/* 
lets work with local storage
-local storage data are stored in the local storage 
-they are not deleted when the user closes the window
-they can be deleted by the user or the browser when there is not enough 
*/

const store = document.getElementById('store-btn')
const retrieve = document.getElementById('retrieve-btn')

const uid = 'u1234';
const user = {
    name: 'ishmam',
    hobby: ['cooking', 'playing']
}

store.addEventListener('click', ()=>{
    window.localStorage.setItem('uid', JSON.stringify(user))
})



retrieve.addEventListener('click', ()=>{
    if(window.localStorage.getItem('uid')){
        console.log('here is the id : ' , JSON.parse(window.localStorage.getItem('uid')))
    }
    else{
        console.log('could not find id')
    }
});
