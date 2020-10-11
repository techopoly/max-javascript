export function add(element, type) {
    const insideUl = document.querySelector(`#${type}-projects ul`);
    insideUl.appendChild(element);
}
//console.log('this is inside add() ')