/* first decide what to do.
moviesArray = [
    {name: 'not complete', age : 5 },
    {name : 'complete'  age :50 },
    {name : 'the dragon' age: 10 }
] 
result = [];
searchTerm = ['the',  'complete'];
ex: the compelte
1.split the searched terms into one single strings of word. "the",  "complete". for this instance wiil be using 
compelte
2.now use forEach to loop through each object.
3.as you have access to object now think how to find the searched term
4. use for/in for each object to check all the property with the word complete
5.it goes like this : 
 for (eachPropety in object){
     if(object.eachProperty == 'complete'){
        result.push(object);
     } 
 }
6. now to make the search dynamic lets use function

const search = ('the', 'complete')=>{
    for (eachPropety in object){
     if(object.eachProperty == 'complete'){
        result.push(object);
     } 
 }
7.
 for (eachPropety in object){
     if(object.eachProperty == 'the'){
        result.push(object);
     } 
 }
8.
 for(let i = 0; i < result.length; i++){
     for (eachPropety in object){
     if(object.eachProperty == searchTerm[i]'){
        result.push(object);
     } 
 }
 }
}
9. now lets do the same for all the objects in the moviesArray

    for(eachObjectElement of moviesArray){
     for(let i = 0; i < searchTerm.length; i++){
      for (eachPropety in eachObjectElement){
       if(eachObjectElement.eachProperty == searchTerm[i]){
        result.push(object);
     } 
 }
 }
}

    }

*/

const moviesArray = [
    { name: 'not complete', age: 5 },
    { name: 'complete', age: 50 },
    { name: 'the dragon', age: 10 }
];

result = [];
searchTerm = ['the', 'complete'];

for (eachObjectElement of moviesArray) {
    for (let i = 0; i < searchTerm.length; i++) {
        for (eachProperty in eachObjectElement) {
            console.log('eachObjectElement[eachProperty] :' + eachObjectElement[eachProperty]);
            console.log('searchTerm[i] :' + searchTerm[i])
            if (eachObjectElement[eachProperty].indexOf(searchTerm[i])) {
                result.push(eachObjectElement);
            }
        }
    }
}

// for (eachObjectElement of moviesArray) {
//     console.log(eachObjectElement);
//     for(eachProperty in eachObjectElement){
//         console.log(eachObjectElement[eachProperty])
//     }
// }

console.log(result); 

// const renderMovies = (title, extraName, extraValue) => {
//     const movieListElement = document.createElement('li');
//     if (newMovieList.length === 0) {
//         movieList.classList.remove('visible'); /* maxmillian has added this logic but i think its redundant as we 
//         have already checked if the input field is empty and if so we return from the function.
//         now i know why he did it he did it so he doesnt have to use toggle() */
//         return;
//     }
//     else {
//         movieList.classList.add('visible');
//     }
//     movieListElement.textContent = `${title}-${extraName} : ${extraValue}`
//     movieList.appendChild(movieListElement);
// }