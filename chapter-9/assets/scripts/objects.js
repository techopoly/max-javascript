const addMovieBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');
const movieList = document.getElementById('movie-list');
const newMovieList = [];
let moviesToShow;


const renderMovies1 = (filterTerm = '') => {
    const movieListElement = document.createElement('li');

    if (filterTerm) {
        newMovieList.forEach((movie) => {
            console.log('newMovieList : ' + movie.title);
        });
        console.log(filterTerm);


        moviesToShow = newMovieList.filter((eachMovieObject) => {
            return eachMovieObject.title.includes(filterTerm);
        });
        moviesToShow.forEach((movie) => {
            console.log('Filtered moviesToShow : ' + movie.title);
        });

    }
    else {
        moviesToShow = newMovieList;
    }

    // const moviesToShow = filterTerm ? newMovieList.filter((eachMovieObject)=>{
    //     return eachMovieObject.title == filterTerm}) : newMovieList ;

    if (moviesToShow.length === 0) {
        movieList.classList.remove('visible'); /* maxmillian has added this logic but i think its redundant as we 
        have already checked if the input field is empty and if so we return from the function.
        now i know why he did it he did it so he doesnt have to use toggle() */
        return;
    }
    else {
        movieList.classList.add('visible');
    }
    moviesToShow.forEach((movie) => {
        console.log('moviesToShow : ' + movie.title);
    });

    moviesToShow.forEach((eachMovie) => {
        let text = eachMovie.title + ' - ';
        for (const eachProperty in eachMovie) {
            if (eachProperty !== 'title') {
                text = text + `${eachProperty} : ${eachMovie[eachProperty]}`  // this way we can access the property name
            }
        }
        movieListElement.textContent = text;
    });

    movieList.appendChild(movieListElement);

    newMovieList.forEach((movie) => {
        console.log('newMovieList : ' + movie.title);
    });

}

const addMovieBtnHandler = () => {
    /*addMovieBtnHandler will be called each time when you click the add movie button. so the variable need to be
    changed every time and declaring these variables in global scope will result in not changing the 
   values in each click  */
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === ''
    ) {
        alert('input field cant be empty');
        return;
    }

    const newMovie = {
        title,
        [extraName]: extraValue
    }
    newMovieList.push(newMovie);
    console.log(newMovieList)
    renderMovies1();

}
const searchBtnHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies1(filterTerm);

}



addMovieBtn.addEventListener('click', addMovieBtnHandler);
searchBtn.addEventListener('click', searchBtnHandler);


/* in this app we are accessing the property that the user sets and then access that property */