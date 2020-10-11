/* 
lets work with session storage
-session storage data are stored in the session storage 
-they are deleted when the user closes the window
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
    window.sessionStorage.setItem('uid', JSON.stringify(user))
})

retrieve.addEventListener('click', ()=>{
    if(window.sessionStorage.getItem('uid')){
        console.log('here is the id : ' , JSON.parse(window.sessionStorage.getItem('uid')))
    }
    else{
        console.log('could not find id')
    }
});

