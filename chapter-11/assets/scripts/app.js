const co = console.log
/* lets start working  */
// 11(2)
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.fullName = function () {
        console.log('my name is ' + this.name)
    }
}

const p = new Person('Ishmam', 23);
p.fullName();
console.log(p)

//11(3)

/* testing: how can i make a function that returns new object with the parameters passed as argument to that object */

function Animal(species) {
    object = {
        species: species,
    }
    return object
}

const aDog = Animal('dog');
const aCat = Animal('cat');
console.log(aDog);
console.log(aCat);

/* constructor fncitons work almost the same way. it creates a new object called "this" and returns that object.
when we want to create a new object with constructor function we call that constructor function with the keyword
'new' and what 'new' does is it takes all the property/field and creates a new object called 'this' with those properties
and returns that object */


/* testing: how the properties are added to an object if it inherites another class*/

class Human{
    
    species = 'homosepiens';
    legs = 2;

    constructor(){
        function humanMethod(){
            co('this is human')
        } 
    }
}

class Man extends Human{
    hair= 'black';

    constructor(){
        super();

    }
}
console.log('--------------------------')
//11(4)
/* understanding __proto__ and prototype */
const man1 = new Man();
console.log(man1);
console.log(man1.__proto__); // human
console.log(man1.__proto__.__proto__); // Object
console.log(man1.__proto__.__proto__.__proto__);

console.dir(Animal);

/* every function is an object. and only funciton has prototype property and it sets what will be the __proto__ of the
objects based on that constructor function  */

function hey() {
     console.log('saying hay')
}

console.dir(hey);
console.dir(hey.prototype)



const hey1 = new hey(); // returns an empty object that is based on hey

console.log(hey.prototype === hey1.__proto__); // returns true as they are both same as mentioned above
console.dir(hey1); // 
/* very intersting : when i use the hey() inside the function is executed. its like calling the fucntion like any
other time */

const hey2 = {
    name : 'ishmam'
}; // object created based on Object 
console.dir(hey2); 


console.log('--------------------------')
//11(5)

co(Human.prototype);
co(man1);
co(Man.prototype);
co(man1.__proto__);
/* adding new propterty to Man prototype dynamicly */
Man.prototype.addedLater = function(){
    co('hey Im added later to the Man-Prototype ')
}
co(Man.prototype);

const man2 = new man1.__proto__.constructor(); // this invokes the same constructor as if we invoked 'new Man()'
co(man2);

console.dir(Object);
console.dir(Object.prototype);// there are a lot of properties that are not assigned as prototype to objects created based on any constructor
/* class.prototype/ constructor.prototype = it defines what will be assigned as a prototype to any object created based on
this constructor fuction/ class */
console.dir(Object.prototype.__proto__); // will show null becasue Object.prototype is the end of prototype chain

/* this is how I guess Object is created based off of Object constructor fucntion */
function Random(){
   // this.name= 'im random'
}

Random = new Random(); 

console.log(Random);

console.log('--------------------------')

/* few things keep in mind:
1. when we create an object the constructor is run at the most beginnig before anything else. then the properties outside
of the constructor are set.
2. we must call super() first inside a constructor
*/
//11(9)
/*differnec between method created inside a constructor and outside a constructor. Methods created outside of a 
constructor in the class are set as prototype. its beacuse javascript optimise the code for us.
think about this: when we create a property the property values differ depending on the object but in case of methods
they are same across all the objects created based on that class. so when we create a new object new method is not
 created hence it shares the same prototype across all the object created based on that class. lets see the proof */

co(man1.__proto__ === man2.__proto__ ); // returns true so it implies that they use the exact same object in the memory

/* so by adding that method to that exact same object we can share that object across all objects created based on
Man class. hence we create that method object once even we add 10000 objects */

/* so if we want to add a method as prototype with constructor funciton that is shared across all the objects 
we can do so by dynamiclly adding method to the prototype to Man  */

Man.prototype.aFunction = function(){
    co('this is shared across all objects created by Man constructor')
}

co(man1)

/* random testing */

/* testing if i can use a random function by an object. answer is NO */
function a(){
    co(this.name);
}
a();// we cant use this with an object


/* what if we just call a constructor funcution */
function b(){
    this.name = 'ishmam'
    co('hey');
    name = 'tasin'
    co(this.name)
}

b(); // here this.name = tasin
new b() // here this.name = ishmam