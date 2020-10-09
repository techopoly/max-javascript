import { add } from './Add.js'
import { remove } from './Remove.js'
import { activeToFinish } from './ActiveToFinish.js'
import { removeEventListener } from './RemoveEventListener.js'


export function FinishToActive(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    add(removeEventListener(element, activeToFinish, 'Activate'), 'active');
}