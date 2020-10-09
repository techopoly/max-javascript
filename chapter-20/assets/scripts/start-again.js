const activeSection = document.getElementById('active-projects');
const finishedSection = document.getElementById('finished-projects');


const activeNodelist = activeSection.querySelectorAll('li')
const finishedNodelist = finishedSection.querySelectorAll('li');

const insideUlInActive = activeSection.querySelector('ul');
const insideUlInFinished = finishedSection.querySelector('ul');

let activeListItems = [];
let finishedListItems = [];

//button of p1 p2 p3
const p1 = document.getElementById('p1')
const p2 = document.getElementById('p2')
const p3 = document.getElementById('p3')

buttonP1 = p1.lastElementChild
buttonP2 = p2.lastElementChild
buttonP3 = p3.lastElementChild


function converNodelistToArray(nodelist, array){
    for(eachNode of nodelist){
        array.push(eachNode);
    }
}

function addingEventListener(arrayToAddEventListenerTo){
    for(each of arrayToAddEventListenerTo){
        each.addEventListener('click', finishBtnHandler.bind(null, each, activeListItems))
    } 
}


function removeFromActiveArray(itemToRemove){
    activeListItems = activeListItems.filter((currentItem)=>{
        if(currentItem == itemToRemove){
            finishedListItems.push(currentItem);
            return false
        }
        else{
            return true
        }
        
    })
    console.log(activeListItems)
   
}

function renderActive(array){
    console.log( array)
    for(each of array){
        insideUlInActive.appendChild(each);
    }   
}

function renderFinished(){
    for(each of finishedListItems){
        insideUlInFinished.appendChild(each)
    }   
}


function finishBtnHandler(element, array){
    //removeLiFromActive();
    //addLiToFinished();
    console.log('chole')
    removeFromActiveArray(element);
    renderActive(array);

}

function activateBtnHandler(){

}



converNodelistToArray(activeNodelist, activeListItems);
converNodelistToArray(finishedNodelist, finishedListItems)

insideUlInActive.querySelector('div').remove();
insideUlInFinished.querySelector('div').remove()
addingEventListener(activeListItems);
renderActive(activeListItems);
renderFinished();

































/* function removeFromActiveArray(liToRemove) {
    activeLiItems = activeLiItems.artificialFilter((currentItem) => {
        if (liToRemove == currentItem) {
            return false
        }
        else {
            return true
        }
    })
}

 removeFromActiveArray(activeLiItems[0]);
console.log(activeLiItems);
 */


/* const removeLiFromActive = (liElementToRemove) => {
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
} */