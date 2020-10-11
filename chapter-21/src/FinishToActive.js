import { add } from './Add.js'
import { remove } from './Remove.js'
import { activeToFinish } from './ActiveToFinish.js'
//import { removeEventListener } from './RemoveEventListener.js'


export function FinishToActive(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    /* this part will not get downloaded initially . it we get once we click on the button that triggers the eventlistener 
    and runs the FinishToActive function */
    import('./RemoveEventListener.js').then(module => {
        add(module.removeEventListener(element, activeToFinish, 'Activate'), 'active');
    })

}