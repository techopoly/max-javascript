import { add } from './Add.js'
import { remove } from './Remove.js'
import { FinishToActive } from './FinishToActive.js'
//import { removeEventListener } from './RemoveEventListener.js'

export function activeToFinish(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    /* this part will not get downloaded initially . it we get once we click on the button that triggers the eventlistener 
    and runs the ActiveToFinish function */
    import('./RemoveEventListener.js').then(module => {
        add(module.removeEventListener(element, FinishToActive, 'Finish'), 'finished');
    })
}