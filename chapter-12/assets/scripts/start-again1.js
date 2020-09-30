//adding event listener to all the buttons
function addingEventListener(type){
    const handler = type === 'active' ? activeToFinish :FinishToActive
    allProjects = document.querySelectorAll(`#${type}-projects li`);
    console.log(allProjects)
    for(const eachProject of allProjects){
        const button = eachProject.querySelector('button:last-of-type')
        button.addEventListener('click', handler.bind(null, eachProject))
    }
}
function activeToFinish(project){
    console.log(project)
    //update the dom
    updateDOM(project, 'finished')
    //remove the previous eventListener    
    //add new eventListener FinishToActive
    addNewEventListener(removePreviousEventListener(project), FinishToActive)
}
function FinishToActive(project){
    console.log(project)
    //update the dom
    updateDOM(project, 'active')
    //remove the previous eventListener
    //add new eventListener FinishToActive
    addNewEventListener(removePreviousEventListener(project), activeToFinish)
}
function updateDOM(element, section){ //section: active-projects/ finished-projects 
    const destination = document.querySelector(`#${section}-projects ul`);
    destination.append(element);
}
function removePreviousEventListener(element){
    console.log(element)
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement
}
function addNewEventListener(clonedElement, section ){
    clonedElement.addEventListener('click', section.bind(null, clonedElement) );
}
addingEventListener('active');
addingEventListener('finished');

 
