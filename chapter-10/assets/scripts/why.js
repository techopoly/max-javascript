/* here i will describe what i did and why i this that way  */

// 4 and 5
/* in lecture 4 and 5 we learn how to create object using class and add methods and property using constructor
so now we will replace the previous codes with the objects created by class */

//10 (6) --- key take away: fields define properties for classes

//10(11) ---- try to understand the concept of static method

const co = console.log;

class Person {
    static gender = 'Male';
    name;
    occupation;
    location;

    static showPerson() {
        console.log(this)
        console.log(this.occupation) // occupation is undefined as this refers to the class not the object of this class
        this.age = 50; // adding a static property to this class that has nothing to do with the objects.
    }



    constructor(name, occu, location) {
        this.name = name;
        this.occupation = occu;
        this.location = location;
    }
}

/* here gender property is static and
- this property cant be accessed through the objects.
- to access we have to access it through class, like this: Person.gender
- when we create a new object of Property all the properties are added to that object except the gender because its
 not a property of that object but the class itselt. same goes for method
  */
const person1 = new Person('ishamm', 'developer', 'Russia, Mosscow')
console.log(person1)
person1.gender = 'kkkks' // will create a new property for person1
console.log(person1.gender);
console.log(Person.gender); // the static property

Person.showPerson();
//person1.showPerson() // will throw an error
console.log(Person.age);

/* random testing---can we access a global variable through an object?? */

let commonName = 'tasin';

const student = {
    name: commonName,
    changeCommonName: function () {
        commonName = 'ishmam'
    }
}
console.log(student.name);
student.changeCommonName();
console.log(commonName)

/* yes we can */

console.log(student.name) // it still shows 'tasin'

/* we can access another objects propety through a object */

class Animal {
    name;
    noOfLegs;

    constructor(name, noOfLegs) {
        this.name = name;
        this.noOfLegs = noOfLegs
    }
}



class Species {
    static dogsName;

    static getDogsName() {
        this.dog = new Animal('bujo', 4);  // try : let dog = new Animal('bujo', 4); 
        console.log(this.dog.name);

    }
}

Species.getDogsName();
console.log(Species.dog);


/* understanding the code flow. most of the errors are created by wrong placemnt of statements */
let a
console.log(a); // is undefined

function run() {
    a = 10;
    console.log(a);
}
run(); // logs 10

//10(15)--- super

/* I MUST call super() constructor to use the component class property and method beacuse 
        you are using the property and methods of parent class and without initailizing the property of the
        parent class for the sepecific child object you dont really have any property of the parent 
        class available. As the class rule goes, we initailize the property with constructior mehtod. So, in
        this case we are initializing the property of the parent class by calling the constructor of parent class
        with super() Keyword   */

class aa {
    aName;
    aAge;

    constructor(name, age) {
        this.aName = name;
        this.aAge = age;
    }
}
class b extends aa {
    bName;
    bAge;

    constructor(name, age) {
        super();
        this.bName = name;
        this.bAge = age;

    }

}

const B = new b('ishmam', 'tasin')/* 

b = {
    aName; // undefined
    aAge; //undefined
    bName; // ishmam
    bAge; // tasin
}
*/

console.log(B);

/* understanding function overloading */

function f1(a, b, c, d) {
    console.log('method with 4 parameters')
}
function f1(a, b) {
    console.log('method with 2 parameters');
}
function f1(a, b, c) {
    console.log('method with 3 parameters') // only this one is put in the memory and others are destroyed
}
f1(3, 2, 5, 3, 5);

/* execution flow of super and constructor */

class A {
    constructor(name) {
        this.name = name + ' -A';
        console.log(this.name) // here name is tasin -A
    }
}

class BB extends A {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(this.name);  // now name is tasin; I think the previous 'tasin -A' is being overritten to 'tasin'

    }
}
let objBB = new BB('tasin');
// another example
class A1 {
    name = 'tasin - A1'
}

class B1 extends A1 {
    name = 'tasin - B1'
}

let objB1 = new B1();

co(objB1.name);
/* 
objB1 is supposed to have to 'name' property. But i think its not happening here. name is overwritten here and showing
the latest value assigned to it
*/

// another example

/*  if we are using 'this' in super class constructor and trying to access any property of the child class 
it will be undefined as the child class property is yet to be declared */

class C {
    constructor() {
        console.log(this.product1); // product1 is not initialized yet
    }

}

class D extends C {

    constructor() {
        super();
    }
    product1 = 'Bag'; // constructor is always run first. it doesnt matter where we put the property
}

new D();

/* we can solve that problem as max shows */


class E {
    constructor() {
        if (this.product1) {
            console.log(this.product1); // product1 is not initialized yet
        }
    }
}

class F extends E {

    constructor() {
        super();
        console.log(this.product1); // product1 is initialized and will not throw an error
    }

    product1 = 'Bag1';
}

new F();

/*  there are some common problem . you will leran more on the go. just dont be upset if you dont understand 
something. it means you have got an oppourtunity to learn something new which will help you in the long term */

//10(19)
/* different way to adding method to addEventListener() */

const butt = document.getElementById('button');

/* this is a completely new discovery for me. if i used object instead of class 'this' would refer to window object */

class Object {

    name =  'ishmam'

    buttHandler = () => {    
        co(this.name) // now 'this' refers to object create by Object class (still have confusion why that happens, hope it will get clearer)
    }


}

const object1 = new Object()

butt.addEventListener('click', object1.buttHandler);

//10(19)--- private property

/* private properties cant be accessed from outside of the class thorugh the object of that class.
we use private when we dont use the property outside of the class and dont need to change anything in future from
outside of the class */

class Tree {
    #name = 'almond tree';  // we declare private with # symbol
}

const almond = new Tree();
//almond.#name = 'not almond tree';

//co(almond.#name);  // will show: Private field '#name' must be declared in an enclosing class


co('----------------------------------')

//10(23)--- instanceof operator

/* to know if a object is based on a particular class we use instanceof */

class Bottle {
    constructor(name){
        this.name = name
    }
}

const plasticBottle = new Bottle('plastic bottle');

co(plasticBottle instanceof Bottle);  // returns true

//10(25)--- Understanding object description

/* to change the permission of editing an object property we have some ways. First start with how can we
see what are the permission given to an object propery. to see that we use : */



// see lectures. only works in chrome dev tool. i have some problem
//Bottle.getOwnPropertyDescriptors(plasticBottle)  : doesnt work. may understand later

// enumerable
// configurable
// writeable
// value

/* can a method change the variable outside of the object of that corresposnding method */
let name = 'taisn';
name = 'is'
let person= {
    change: function(x){
        x= 'ishmam'
    }
}
person.change(name);
console.log(name);

// so a method cant change the 
