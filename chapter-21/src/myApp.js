//adding dynamic imports in removeEventListener
import { addingEventListener } from './AddingEventListener.js' // in the carly braces we define what to import and in quotation we define where to import

addingEventListener('active');
addingEventListener('finished');





























/* // creating funcitons:
const removeLiFromActive = (liElementToRemove) => {
    liElementToRemove.remove();
}

const addLiToFinished = (liElement) => {
    insideUlInFinished.appendChild(liElement);
}

const addLiToActive = (liElement) => {
    insideUlInActive.appendChild(liElement)
}

const removeLiFromFinished = (liElementToRemove) => {
    liElementToRemove.remove(liElementToRemove);
}


function finishBtn1Handler(liElementToRemove, liElementToAdd) {

    console.log(liElementToRemove.lastElementChild.textContent)
    if (liElementToRemove.lastElementChild.textContent == 'Finish') {
        console.log('this is running ' + liElementToAdd.lastElementChild.textContent);
        removeLiFromActive(liElementToRemove);
        addLiToFinished(liElementToAdd);
        liElementToAdd.lastElementChild.textContent = 'Activate';
        liElementToAdd.addEventListener('click', activateBtn1Handler.bind(null, liElementToAdd, activeClones[0]))


    }
    if (finishBtn1.textContent == 'Activate') {
        console.log('this is running ' + liElementToAdd.lastElementChild.textContent);
        removeLiFromFinished(liElementToRemove);
        addLiToActive(liElementToAdd);
        liElementToAdd.lastElementChild.textContent = 'Finish'

    }


    //liElementToAdd.addEventListener('click', activateBtn1Handler.bind(null, liElementToAdd, liElementToAdd));

    // liElementToAdd.lastElementChild.removeEventListener('click', finishBtn1Handler.bind(null, liElementToAdd, liElementToAdd));

}

function activateBtn1Handler(liElementToRemove, liElementToAdd) {


    console.log(liElementToAdd.lastElementChild)

    if (activateBtn1.textContent == 'Activate') {
        console.log('this is running ' + activateBtn1.textContent);
        removeLiFromFinished(liElementToRemove);
        addLiToActive(liElementToAdd);
        liElementToAdd.lastElementChild.textContent = 'Finish';


    }

    if (activateBtn1.textContent == 'Finish') {
        console.log('this is running ' + activateBtn1.textContent);
        removeLiFromActive(liElementToRemove);
        addLiToFinished(liElementToAdd);
        activateBtn1.textContent == 'Activate';


    }

}
 */
/* -------------------------------------------------------- */
//console.log(finishBtn1.textContent);
//adding eventListener 
/* if (finishBtn1.textContent == 'Finish') {
    console.log('this is running ' + finishBtn1.textContent);
    finishBtn1.addEventListener('click', finishBtn1Handler.bind(null, activeLi1, activeClones[0]));
}
if (finishBtn1.textContent == 'Activate') {
    console.log('this is running ' + finishBtn1.textContent);
    finishBtn1.addEventListener('click', activateBtn1Handler.bind(null, activeLi1, activeClones[0]))
}

if (activateBtn1.textContent == 'Finish') {
    console.log('this is running ' + activateBtn1.textContent);
    activateBtn1.addEventListener('click', finishBtn1Handler.bind(null, finishedSectionLi1, finishedClones[0]));
}
if (activateBtn1.textContent == 'Activate') {
    console.log('this is running ' + activateBtn1.textContent);
    activateBtn1.addEventListener('click', activateBtn1Handler.bind(null, activeLi1, activeClones[0]))
} */




/* finishBtn1.removeEventListener('click', finishBtn1Handler.bind(null, activeLi1, activeClones[0]), true);
activateBtn1.removeEventListener('click', activateBtn1Handler); */
//activateBtn1.removeEventListener('click', activateBtn1Handler,true);





/* I tried to do it with my knowledge but I know I can improve it even more */