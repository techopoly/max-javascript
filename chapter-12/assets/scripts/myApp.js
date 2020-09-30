function addingEventListener(type) {
    const handler = type === 'active' ? activeToFinish : FinishToActive
    allProjects = document.querySelectorAll(`#${type}-projects li`);
    console.log(allProjects)
    for (const eachProject of allProjects) {
        const button = eachProject.querySelector('button:last-of-type')
        button.addEventListener('click', handler.bind(null, eachProject))
    }
}
addingEventListener('active');
addingEventListener('finished');

function activeToFinish(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    add(removeEventListener(element, FinishToActive, 'Finish'), 'finished');
}

function FinishToActive(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    add(removeEventListener(element, activeToFinish, 'Activate'), 'active');
}

function remove(element) {
    element.remove();
}
function add(element, type) {
    const insideUl = document.querySelector(`#${type}-projects ul`);
    insideUl.appendChild(element);
}
function removeEventListener(element, handler, type) {
    clonedElement = element.cloneNode(true);
    //element.replaceWith(clonedElement);
    const button = clonedElement.querySelector('button:last-of-type');
    button.textContent = type === 'Finish' ? 'Activate' : 'Finish'
    button.addEventListener('click', handler.bind(null, clonedElement))
    return clonedElement;
}





































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