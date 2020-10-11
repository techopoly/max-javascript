export function removeEventListener(element, handler, type) {
    const clonedElement = element.cloneNode(true);
    //element.replaceWith(clonedElement);
    const button = clonedElement.querySelector('button:last-of-type');
    button.textContent = type === 'Finish' ? 'Activate' : 'Finish'
    button.addEventListener('click', handler.bind(null, clonedElement))
    return clonedElement;
}