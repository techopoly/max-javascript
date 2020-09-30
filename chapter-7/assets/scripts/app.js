/* Here I will show multiple ways of doing the same thing and note which one is better for performance */

//const addMovieButton = document.getElementById("addMovieButton");
//const addMovieButton = document.querySelector('header').lastElementChild; //downside: if we make changes to the childrens' sequence it will affect the query
const addMovieButton = document.getElementById("addMovieButton");

const selectMovieModal = document.getElementById('add-modal');  // better for performance ITC
//const popUpMessage = document.querySelector('#add-modal')
//const popUpMessage = document.body.children[1];

//const backDropDiv = document.getElementById('backdrop');
const backDropDiv = document.body.firstElementChild;

const confirmCancel = document.getElementById('confirmCancel')
//const confirmCancel = selectMovieModal.querySelector('.btn--passive')

const confirmAdd = document.getElementById('confirmAdd')
//const confirmAdd = selectMovieModal.querySelector('.btn--success')
//const confirmAdd = confirmCancel.nextElementSibling;

let userInputs = selectMovieModal.querySelectorAll('input');

const movies = [];

const sectionEntryText = document.getElementById('entry-text');

const divSure = document.getElementById('delete-modal');

const clickYes = divSure.children[2].children[1];
const clickNo = divSure.children[2].children[0];



const toggleMovieModalHandler = () => {
    selectMovieModal.classList.toggle('visible');  // toggle: add/remove this class but keeps all other classes 
    toggleBackdropHandler();
    console.log('clicked');
    clearInputField();
}

const toggleBackdropHandler = () => {
    backDropDiv.classList.toggle('visible');
}
const clearInputField = () => {
    for (userInput of userInputs) {
        userInput.value = '';  // .value is IMPORTANT. DONT MISS IT!!
    }
}

const removeItem = (elementID) => {
    let index = 0;
    console.log('id in removeItem : '+elementID);                      
    for (movie of movies) {
        if (movie.movieId === elementID) {
            break;
        }
        index++;
    }
    
    movies.splice(index, 1);
    const ulTag = document.getElementById('movie-list');
    console.log(index);
    ulTag.children[index].remove();
    // ulTag.removeChild(ulTag.children[index]);  alternative that works on older
   
}

const toggleAreYouSure = ()=>{
    divSure.classList.toggle('visible');
}

const clickYesHandler = (elementId)=>{
    console.log("id in clickYesHandler : "+elementId)

    removeItem(elementId);
    toggleAreYouSure();
}

const clickNoHandler = ()=>{
    toggleAreYouSure();
}
const showConfirmation = (id)=>{
    console.log("id in showConfirmation : "+id)
    toggleAreYouSure();
    clickYes.addEventListener('click', clickYesHandler.bind(null, id));
    clickNo.addEventListener('click', clickNoHandler);

}



const showMovie = (localid, localTitle, localUrl, localRating) => {
    const liElement = document.createElement('li');
    liElement.className = 'movie-element'
    liElement.innerHTML = `
    <div class='movie-element__image'>
        <img src='${localUrl}' alt='${localTitle}'>
    </div>
    <div class='movie-element__info'>
        <h2>${localTitle}</h2>
        <p>${localRating}/5</p>
    </div>
    `;
    const ulTag = document.getElementById('movie-list');
    ulTag.append(liElement);
    liElement.addEventListener('click', showConfirmation.bind(null, localid))
    console.log("id in showmovie : "+localid)
};

const confirmAddHandler = () => {
    /* if you mvove these assignments up to the top then these values are not updated in real time */
    let id = Math.random().toString();
    let title = userInputs[0].value;
    let imgUrl = userInputs[1].value;
    let rating = userInputs[2].value;
    if (title.trim() === '' || imgUrl.trim() === '' || rating.trim() === '' || +rating < 0 || +rating > 5) {
        alert('enter valid information');
        toggleMovieModalHandler();

    } else {
        const movie = {
            movieId: id,
            movieTitle: title,
            imageUrl: imgUrl,
            movieRating: rating
        }
        movies.push(movie);
        console.log(movies);
        toggleMovieModalHandler();
        removeEntryText();
        showMovie(movie.movieId, movie.movieTitle, movie.imageUrl, movie.movieRating);
    }


};

const removeEntryText = () => {
    if (movies.length == 0) {
        sectionEntryText.style.display = 'block';
    } else {
        sectionEntryText.style.display = 'none';
    }
}



addMovieButton.addEventListener('click', toggleMovieModalHandler);
backDropDiv.addEventListener('click', toggleMovieModalHandler);
confirmCancel.addEventListener('click', toggleMovieModalHandler);
confirmAdd.addEventListener('click', confirmAddHandler);

clickNo.addEventListener('click', clickNoHandler);



/*  the most important the to do t in this world is that you have to be conscious of yur purpose.  */