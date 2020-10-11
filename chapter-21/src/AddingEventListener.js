import { activeToFinish } from './ActiveToFinish.js'
import { FinishToActive } from './FinishToActive.js'

export function addingEventListener(type) {
    const handler = type === 'active' ? activeToFinish : FinishToActive
    const allProjects = document.querySelectorAll(`#${type}-projects li`);
    console.log(allProjects);
    for (const eachProject of allProjects) {
        const button = eachProject.querySelector('button:last-of-type');
        button.addEventListener('click', handler.bind(null, eachProject));
    }
}