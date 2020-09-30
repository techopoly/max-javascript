co = console.log
//15(2)
//pure and impure function 

function add(n1, n2) {  //pure function
    return n1 + n2
}
console.log(add(2, 4));

function mathRandom(n1) {
    return n1 + Math.random(); //impure function: always invokes diff result with same input
}

/* random testing: can i change a global variable from inside a function */
let name1 = 'ishmam';

function ishmam(name) {
    name1 = name + ' tasin'
    return name1
}
co(ishmam(name1))
co(name1);

//side Effect: when we change something outside of a function ex: given above(ishmam())

/* another example of a function with side effect is when we pass an array or object and then change its items.
NOTE: when you pass an array you are not passing a copy of that array/obj but the original object's reference/address. So, making
any change to that object inside that function will result in changing the original object outside of that function */

const array1 = ['ishmam', 'suzana', 'tasfia', 'aroni', 'mehzabin']

function changeArray(array) {
    array.push('AMIO ASI');
}
changeArray(array1)
co(array1);

/* 15(4): factory function. Factory functons are the function produces anohter function */

/* lets see an example first and then we will use factory function to show why we use it and how it reduces the amount of code */

function taxCalculator(amount, tax) {
    return amount * tax
}

const taxOnVat = taxCalculator(100, 0.19);
const incomeTax = taxCalculator(100, 0.33);

console.log(taxOnVat);
co(incomeTax);

/* now lets see how we use factory funciton to do the same work with passing lesst argument. cos every time we 
want to calculate the vat tax or income tax we need to pass the tax rate for each categry. so why not create different
funciton for each category and only pass the 'amount' to see the tax amount */

function taxCalculator1(tax) {
    function CustomisedFunction(amount) {
        return amount * tax
    }
    return CustomisedFunction
}

const taxOnVat1 = taxCalculator1(0.19); // taxOnVat1 is now a funtion where we only need to pass the amount.and returns the vat amount
const incomeTax1 = taxCalculator1(0.33)// taxOnVat1 is now a funtion where we only need to pass the amount. and returns the income tax amount

// now you can create as many function as you want with taxCalculator1() function
co(taxOnVat1(1000));
co(incomeTax1(1000))

/* random testing: accessing data of one object from another object */

class Obj1 {
    constructor() {
    }
    name = 'ishmam';
    age = 23;

    setName(changeNameTo) {
        this.name = changeNameTo;
    }
    setOthersName(obj2SetName) {
        this.changeOtherObjectName = obj2SetName
    }
}
class Obj2 {
    constructor() {
    }

    name = 'tasin';
    age = 22;

    setName(changeNameTo) {
        this.name = changeNameTo;
    }
    setOthersName(obj2SetName) {
        this.changeOtherObjectName = obj2SetName
    }

}

const obj1 = new Obj1();
const obj2 = new Obj2();



//co(obj2.name) //debuging

obj1.setOthersName(obj2.setName.bind(obj2));

obj2.setName('obj2 name is changed')// debug
co(obj2.name) //debug
obj1.changeOtherObjectName('obj2 name is changed');

//15(5): Closure
/* this is pretty important concept: when we create a function is has its own lixial environment which means at the 
time of creating that function it sets the scope for that function. lets look at example: */
const multiple = 3;
function taxCalculator3(tax) { //this function has access to tax and any global variable

    function CustomisedFunction(amount) { // this function has access tax, amount and any global variable
        return amount * tax
    }
    return CustomisedFunction
}

const taxOnVat3 = taxCalculator3(0.19); // taxOnVat3 has access to the tax variable that was present at the time it was created.
const incomeTax3 = taxCalculator3(0.33)/*when we create incomeTax3 we pass a new tax value but it doesnt change the tax value we
during the creation of taxOnVat3.Beacuse it is not part of the taxOnVat3 environment
now here is the twist(though its noramlly logical to me): if we use the variable multiple inside the customized function
changing that multiple variable before calling the taxOnvVat3 or incomeTax3 will affect the result. because its part 
of the environment for both functions as this is global and making any change will affect the result.
same goes for tax variable.if we change the tax varible inside CustomisedFunction it will affect the inner funciton.


So, every funciton is a closure beacuse it closes over the varibales defined in its environment and it kind of memorises them
for example tax value for CustomisedFunction. 
*/ 

//ex:
let userName = 'ishmam'

function getUser(){
    let name = userName;
    console.log('Hi ' + name)
}

userName = 'tasin';

getUser(); // what will we see ? ishmam/ tasin
/* we see tasin becasue name is not copying the value to it but pointing to the value of userName. SO changing the
value of userName reflects on the name variable */

/* any function first looks for a varibel in its inner enviromnet if it doesnt find any then it goes outer environment 
to look for that variable */
function getUser1(){
    let userName = 'anna'
    let name = userName;
    console.log('Hi ' + name)
}
getUser1();

