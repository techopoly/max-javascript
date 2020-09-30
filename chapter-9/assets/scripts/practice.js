
/* i will be practicing here and document my thoughts. IF I REVIEW IT AFTER COMPLETING THE CHAPTER I WILL GET A BIG 
LEVERAGE */

//9(5)
//if you access an property in an object which is not declared yet, you get undefined
const dekha = console.log;
const person = {
    name: 'ishmam',
    age: 23,
    hobbies: ['traversing the any area to find untapped market', 'look into existing businesses']
}

console.log(person.location);// logging out an property that doesnt exist and it throws undefined

//adding new property to an object

person.location = 'Mohammadpur';
console.log(person.location);
//modifying a property

person.age = 22;
console.log(person.age);
// deleting a property
delete person.age;
console.log(person.age); // will show undefined in the console
/* if we set the age to undefined it means that the age property is not initialised and so it doest not exists
as a property in the person object[techniquly its there]. if we set the age property to null, it means the age property exists but it doesnt 
have any value */
console.log(person);
person.age = null;
console.log(person);
console.log('------------------------------------------------')

//9(6)---special key names and square bracket property access

const anotherPerson = {
    'first name': 'ishmam',
    'last name': 'tasin',
    age: 23
}

console.log(anotherPerson["first name"]); /* we are accessing the property with square bracket. we cant access it 
as we usually do with regular way of accessing property. javascript will throw an syntax error */

console.log(anotherPerson['age']) /* to access the property with square brackets,
 we have to convert the property name to string by rapping that name in quotation
 know a keyword --cohersed to string. maxmillian used that in lecture */

console.log('------------------------------------------------')

// 9(7)---property type and property order
/* we can use numbers as the property key as we do in array.  */

const yetAnotherPerson = {
    0: 'apollo',
    1: 'launch'
}
console.log(yetAnotherPerson[0]);// you dont have to warp this in quotes here. doing so will also work though

//orders of the property
/* the properties are shown in a order as it were added however if you have objects with only numbers as property 
key then its automatically sorted. that makes sense think about arrays*/
console.log('------------------------------------------------')

//9(9)--dynamically accessing a property and setting properties dynamically

const firstIndex = 0;
const firstName = 'first name' // assume user want to set a property called first name
console.log(yetAnotherPerson[firstIndex]);
console.log(anotherPerson[firstName]);
console.log(anotherPerson.firstName)/* the . notation will always search for literally the propety with the name that is after
the . notation */
// setting property names dynamically
const userChosenPropertyName = 'level';

const user = {
    name: 'ishmam',
    age: 23,
    program: 'entrepreneurship',
    [userChosenPropertyName]: 1
}
console.log(user);
console.log(user[userChosenPropertyName])

//9(13)-- adding filter option

/* methods to use
string.include();
ternary operator
*/
console.log('------------------------------------------------')

let vitalTesting = [1, 2, 3, 4, 5];
let vitalTesting2 = vitalTesting;

vitalTesting2 = 'is it a joke'


console.log(vitalTesting);
console.log(vitalTesting2);

let marshia = {
    name: 'marshia',
    age: 22
}

let aisha = marshia;

aisha = {
    name: 'aysha',
    age: 35
}

console.log(marshia);
console.log(aisha);
aisha.name = 'aisha married '
console.log(marshia);
console.log(aisha)

console.log('------------------------------------------------')

//9(15)

const person1 = {
    name: 'ishmam',
    hobbies: ['exploring', 'building']
};

let person2 = { ...person1 }; // useing spread operator to create a brand new object as the person 1

console.log(person2);

person2.hobbies.push('marketing');/* changing the hobbies array will result in changing the hobiies array in person1
as person2 does not create a brand new hobbies array but copies the reference to the person1's hobbies array */
console.log(person1);

/* to solve the problem we will use spread operator to the second layer */

person2 = { ...person1, name: 'mohammad tasin', hobbies: [...person1.hobbies] };
console.log(person2);
console.log(person1);
person2.hobbies.push('creative thinking'); //changing the person2 hobbies array will not affect the person1 hobbies array
console.log(person2);
console.log(person1);

console.log('------------------------------------------------');

//9(16)--- alternative way to copy object

let person3 = {
    name: 'max'
}
let person4 = Object.assign({}, person3);

person4.age = 23; // does not add new property to person3
console.log(person3);
console.log(person4);
console.log('------------------------------------------------');

//9(17)--- Object destructuring 

/* the concept of destructuring : by this we pull out as many properties of an object as we want and assign them to 
different varibles. Lets have a look at the example  */

const dog1 = {
    name: 'chagu',
    age: 60,
    hobbies: {
        deceptive: 'high level',
        selfRightous: 'extremely',
        ignorance: 'without any doubt'
    },
    experience: 'a lot of experience'
}

const { name: dogsName, age, hobbies, ...restOfTheProperty } = dog1;

console.log(dogsName); // you can access the name property with anohter variable without using the property chaining
console.log(age); // same goes here
console.log(hobbies); //same goes here
console.log(restOfTheProperty);// all the rest of the property is stored here in the form of property and returns object

console.log('------------------------------------------------');

/* 9(18) ----checking if a property exists in an object */

const cat = {
    name: 'meawo',
    location: 'under roof',


}
//way 1
if ('name' in cat) {
    // execute the code
}
// using ternary operator
const checkingCatProperty = 'name' in cat ? true : false; // have to set the searching value in string
console.log(checkingCatProperty);

//way 2
/* destructute the object and then use if() */

const { name: catName } = cat;
if (catName) {
    console.log('name exists')
};
// way-3 directly access the property with chaining 
if (cat.name) {
    console.log('name exists')
}

console.log('------------------------------------------------');
/* 9(19)--- understanding this keyword */

// 1st principle: 'this' inside a function refers to whatever calls that fucntion


const retreivingName = () => {
    console.log(this.name);
}

const bat = {
    name: 'batman',
    agenda: 'be a human',
    showName: retreivingName,
    showName1: function () {
        console.log(this.name)
    }
}
bat.showName();// showName() doesnt work.  need to understand whats going on
bat.showName1();
console.log('------------------------------------------------');

//9(20) --- function shorthand syntax.

const bat1 = {
    name: 'wannabe human',
    showname() {
        console.log(this.name)
    }
}
console.log('------------------------------------------------');

//9(21)--- using a funtion with destructuring and strange behaviour of 'this'


let userName = 'constantinpole'
const elementCallign = document.getElementById('calling');

calling = (namee = 'this is working with calling only') => { console.log(namee) };
calling1 = () => { console.log('this is working with calling1') };
calling2 = (name) => { console.log(name) };


elementCallign.addEventListener('click', (name = 'yes working') => { console.log(name); }); // dont know why behaves this way
elementCallign.addEventListener('click', calling);
elementCallign.addEventListener('click', calling1);
elementCallign.addEventListener('click', calling2.bind(null, 'this is working with calling2'));
elementCallign.addEventListener('click', calling2.bind(null, userName));


/* the above example lets us see how to use bind() to pass parameter before executing the function
now we will do few things :
1. create an object with method 
2. use object destructuring to use that method without chaining
3. then we will see we can normally use that method as we expect to and use bind() as a solution to that  */

const bat2 = {
    name: 'superbat',
    capitalName: function () {
        console.log(this);
        return this.name.toUpperCase();

    }
}

let { capitalName } = bat2;

let dummy = capitalName(); /* the 'this' inside this method refers window object  since 'this' refers to the
which is responsible for calling that method. Here, though capitalName() is destructured from bat2 object, when we 
call that without having any object responsible for that calling every "this" inside that method then refers to
the global object window */
console.log(dummy);
/* solution to this: */
//way 1: 
dummy = bat2.capitalName(); // 'this' keyword inside this method now refers to the bat2 object
console.log(dummy); // this actually call the method not the destrucutred method/function

//way 2: using bind

capitalName = capitalName.bind(bat2);/*the right hand is now a function definition which means its not calling the 
function right now but storing the function deifinition into the capitalName
 */
dummy = capitalName(); // now you can use the capitalName without worrying about using the object everytime you call the method. you are actually calling the finction on bat2
console.log('using bind : ' + dummy);
console.log('------------------------------------------------');

/*using bind() just for fun  */

//we can borrow method of another object to run on a different object

let runner = {
    name: 'Runner',
    run: function (speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
    }
};


let flyer = {
    name: 'Flyer',
    fly: function (speed) {
        console.log(this.name + ' flies at ' + speed + ' mph.');
    }
};
/* let run  = runner.run; means you are copying the function definition which is :
function(speed) {
        console.log(this.name + ' runs at ' + speed + ' mph.');
so, we can see the funtion has lost its origin,the object it is part of*/

let run = runner.run.bind(flyer, 20); // so we can now use the method on any object using bind() to set which object
// to run the function on

run(); // this run will run the function on flyer object

/*  summary : The bind() method creates a new function, when invoked, has the this sets to the provided value.
The bind() method allows an object to borrow a method from another object without making a copy of that method. This is known as function borrowing in JavaScript.
link : https://www.javascripttutorial.net/javascript-bind/
*/

let numbers = [1, 2, 4, 7, 3, 5, 6];
numbers.sort((a, b) => {
    return a - b
});
console.log(numbers);

console.log('------------------------------------------------');
let a = 4;
setTimeout(() => {
    a = a + 1;
    dekha(a);
}, 1);

dekha(a);

console.log('------------------------------------------------');

let testingAsync = (callback) => {
    callback();
}

let sayYo = () => {
    dekha('YO');
};

testingAsync(sayYo);
dekha('outside YO')

console.log('------------------------------------------------');

// 9(23)--- what happens to 'this' when we call a function with addEventListener()

const callingRandom = document.getElementById("calling1");

let aPerson = {
    name: 'ishmam1234',
    showName5: function() {
        console.log(this.name);
    }
}

const showName3 = ()=>{
   console.log(this);
}

function showName4(){
    console.log(this);
 }

callingRandom.addEventListener('click', aPerson.showName5);/* important concept : how javascript works here.
aPerson.showName5 refers to the function expression here and it doesnt execute the function here immediately.
when the button is click the function is executed. But when the funtion executes, the the object aPerson is not 
responsible for the execution or to say differently the object aPerson is not calling the person but the event 
listener and event listenser is the method of the 'button element object'.
it might seem that aPerson is calling the person but technically aPerson.showName5 is not calling the fuction 
but pass a copy of that function.In one sentence the browser binds "this" to the DOM element that triggered the
event. aPerson.showName5()  whould result in  calling the function immediately*/
//check them too for clarity:
// callingRandom.addEventListener('click', aPerson.showName5());
// callingRandom.addEventListener('click', aPerson.showName5.bind(aPerson));
//aPerson.showName5();
//callingRandom.addEventListener('click',showName4);
callingRandom.addEventListener('click',showName3); // here with the arrow 'this' refers to window object.

console.log('------------------------------------------------');

//9(24)--- uderstanding 'this' and arrow funciton

 /* the first principe : 'this' inside of an arrow function always refers to the global object outside of that function.
It doesnt matter if the function is called by any Object, this wouldnt refer to the Object just one step up that 
calling object */

const objj  = {
    name : 'toyota',
    showCarName : ()=>{
        console.log(this); /* this refers to the window object as arrow function keeps the reference of this
        that it had outside of that arrow function. in this case its the window object */ 
        console.log(this.name)
    }
}

objj.showCarName(); // 'this' here refers to window object not the oject running the function.
// for strange reason the window object is not showing up in the console;

/* an other example of where arrow function stands out with such behaviour and helps to solve a problem */

// const members = {
//     name : 'Blue Rockets',
//     people : ['max', 'manuel'],
//     getTeamMembers : function(){ // function() changes the binding of 'this' to the current object. have to look into it deeply later 
//         this.people.forEach(function(p){
//             dekha(p + " - " + this.name ) // this should show the members names with team name next to it.but it doesnt
//         })
//     }
// }
//members.getTeamMembers(); 

// now use arrow function instead of function()

const members = {
    name : 'Blue Rockets',
    people : ['max', 'manuel'],
    getTeamMembers : function(){
        //console.log(this) 
        this.people.forEach((p)=>{
            dekha(p + " - " + this.name ) // this should show the members names with team name next to it.but it doesnt
        })
    }
}

members.getTeamMembers();

/* i still have confusion about what arrow function does to "this".  it seems like arrow fucntion keeps the 
reference of 'this' that it had outside of that function */

// 9(27)--- using getter and setter 
/* you wouldnt always use them but might use sometimes. especially when you want to add some extra validation
before adding a property to an object. */

const classmate = {
    set name(val) {
        this.classmateName = val;
    },
    get name(){
        return this.classmateName;
    } 
}
classmate.name = 'ishmam'; // you use it like a property
console.log(classmate.name);
dekha(classmate.classmateName); // i found out you can also access the internal property 

