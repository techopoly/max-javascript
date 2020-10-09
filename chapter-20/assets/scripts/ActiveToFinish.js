import { add } from './Add.js'
import { remove } from './Remove.js'
import { FinishToActive } from './FinishToActive.js'
import { removeEventListener } from './RemoveEventListener.js'

export function activeToFinish(element) {
    //update DOM
    remove(element);
    //remove EventListener from element and add EventListener to the same element
    add(removeEventListener(element, FinishToActive, 'Finish'), 'finished');
}