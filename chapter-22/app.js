/* 
22-5
lets work with cookies
-cookies data are stored in the cookies 
-if ther is no expiration set, they are deleted when the user closes the window/session expires
-they can be deleted by the user 
-cookies are available when web pages are servered by a real web server
-we need a real server to add cookies to a page as the web requires that for sequrity reason (covered in the tooling
    module)
*/

const store = document.getElementById('store-btn')
const retrieve = document.getElementById('retrieve-btn')


const user = {
    name: 'ishmam',
    hobby: ['cooking', 'playing']
}

store.addEventListener('click', ()=>{
    const userCookie = 'u123456'
    document.cookie = `uid=${userCookie}`
   document.cookie = `user=${JSON.stringify(user)}`
})

retrieve.addEventListener('click', ()=>{
   console.log(document.cookie)
});

