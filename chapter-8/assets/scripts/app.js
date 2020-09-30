/* ARRAY knowledges start*/

//both works the same way
const numbers = Array(4);  //A in Array has to be capitazid. Creates an empty array with the length of 4
const number = new Array(5); //A in Array has to be capitazid. Creates an empty array with the length of 5
const moreNumbers = Array.of(1);

console.log(numbers);
console.log(number);
console.log(moreNumbers); // this creates array like regular arrays but there are some very niche cases where you might need to use this.very rarely
// just be aware of these types of arrays 

//converts iterables(array like objects) into array. this one is IMPORTANT
const yetMoreArray = Array.from('ishmam');
console.log(yetMoreArray);

//8(4)--you can store different types of data into a same array;

let diffTypeStoredInsameArray = [1, 'this is string', { name: 'this is object', index: 2 }, ["this is array within array"]]

//8(5) --using differnet methods to arrays

someNumbers = [1, 2, 3, 4, 5];
//adding new item at the end of the array
someNumbers.push(101);
//adding new item at the beginning of array
someNumbers.unshift(10);  // unshift() returns the new length of the array
console.log(someNumbers);

// remove the last element
someNumbers.pop();  //pop() returns the element it removed
console.log(someNumbers);

//removing item at the beginning of the array
someNumbers.shift();// returns the item it removed
console.log(someNumbers);

// to manipulate elemensts in the array, use direct index of that item
someNumbers[3] = 'this number is changed to string'
console.log(someNumbers[3]);
//someNumbers[15]; // will set all the indexes between 5 and 15 to empty/undefined; RARELY USED 

//8(6)
//insert item in between other items in an arrays
// console.log(someNumbers)
// someNumbers.splice(4, 0, "this is made by splice")
// console.log(someNumbers);
// someNumbers.splice(4, 2, 'another one added by splice');
// console.log(someNumbers);

//8(7)---copying an array and selecting ranges

const anotherArray = ['element 1', 'element 2', 'element 3', 'element 4', 'element 5', 'element 6', 'element 2']
const copiedArray = anotherArray.slice(); // return a new array which is a copy of anotherArray
copiedArray.push('element 4')
console.log(anotherArray, copiedArray); // logs 2 different array 
// selecting range of element that you want to copy
const rangeArray = anotherArray.slice(3, 5); // returns the elements of index 3 to 4. 5 is excluded
//anotherArray(3);
//anotherArray(-3,-1);// selects from the 3rd last upto the last element excluding the last element.so array is 4 and 5
console.log(rangeArray);

//8(8)--- combining array with anohter array

const yetAnotherArray = ['element 7', 'element 8']
const whyNotAnother = anotherArray.concat(yetAnotherArray); // creates another array and returns that
console.log(whyNotAnother);

//8(9)--- finding the index of an element with indexof() and lastIndexOf()

console.log(anotherArray.indexOf('element 6')) //  will stop after it finds the first element with the content "element 2"
// it receives 2nd argument for where to start searching from  
//lastIndexOf() starts form right
/* IMPORTANT- this does not work for array with objects or nested array. those array stores the reference of those object
see the lecture for more details */

//8(10) --- finding the matching obejct in an array of object
/* i tried it with for/of loop and it works  */
const person = [{ name: 'manuel' }, { name: 'samuel' }, { name: 'darren' }]
let count = 0;
for (const eachPerson of person) {
    if (eachPerson.name === 'manuel') {
        console.log(eachPerson)
    }
}
//lets try it with find()

const matchingManuel = person.find((eachElement, indexOfEachElement, theArray) => {
    return eachElement.name === 'manuel' // if the property name of any element matches with 'manuel' the whole object will be returned
})


console.log(matchingManuel); /* matchingManuel is not a new created object. it holds the same reference to the main object as person holds.
so changing matchingManuel will change the boject in the person array */

//findIndex() works the same way as find()

const IndexSamuel = person.findIndex((eachElement, indexOfEachElement, theArray) => {
    return eachElement.name === 'samuel' // if the property name of any element matches with 'manuel' the index of the element is returned
})
console.log(IndexSamuel);

//8(11)---to access an arry, its index and use those values we use forEach()

const prices = [3, 5, 6.6, 5, 6, 7, 4.9];
const taxAddedPrice = []
const tax =
    // it works quite similarly as find() as in how it takes a function with parameters as arguments
    prices.forEach((eachElement, idx, theArray) => {
        taxAddedPrice.push(eachElement * 3.3);
    });
console.log(taxAddedPrice);

//8(12)--- transforming data with map(). alternative to forEach()

const ages = [12, 13, 14, 15, 16]
const changedAge = ages.map((eachElement, idx, theArray) => { /* this doesnt change the original array */
    return eachElement * 2;
})
console.log(changedAge);

//8(14)---sort()ing and reverse()ing
/* sort() converts each number into string and then compares/sorts them on a string logic.
For string only the first number is compared. 
honestly i didnt quite understand. i have dig down deep into how the function works*/

const unorganisedNumbers = [2, 4, 3, 20, 1, 9]
const stillUnsortedNumbers = unorganisedNumbers.sort();
console.log(stillUnsortedNumbers);
/* you would see 20 comes at index 2 as sort() considers only 2 when comparing */

const sortedNumbers = unorganisedNumbers.sort((a, b) => {
    if (a > b) return 1;
    else if (a === b) return 0;
    else return -1;
});
console.log(sortedNumbers)
//8(15)---using filter and understanding the difference between map()
const justTesting1 = unorganisedNumbers.map((item) => {

    return item > 4; // map() will return if true or false using the value provided by unorganisedNumbers 
})
console.log(h = justTesting1);

justTesting2 = unorganisedNumbers.filter(item => item > 6 /*the result is returned in every iteration  */);

console.log(justTesting2);
console.log('-------------------------------------')
//8(17)--- using reduce() method 

const completeNewArray = [4, 5, 6, 7, 8, 9]
const reducedArray = completeNewArray.reduce((preValue, curValue, index, arrayItself) => {
    preValue += curValue;
    console.log(preValue)
    return preValue + curValue // the iteration ends here . the preValue/returned/initial value starts with 0 by default
}, 0)
console.log(reducedArray);
console.log('-------------------------------------')

//8(19)---using split() method on strings to seperate parts of strings and store them into array based on regular expression
const randomString = 'this is me; age is almost 23; going to invest some time into building a billion dollar company'
const splitedRandomString = randomString.split(';');
console.log(splitedRandomString)

//using join() method on array 
const fragmentedName = ['ishmam', 'tasin'];
const name = fragmentedName.join(' is the same person who you call  ');
console.log(name);

//8(20)---using spread operator (...). just see the example.

const copiedFragmentedName = [...fragmentedName];
console.log(fragmentedName, copiedFragmentedName);
fragmentedName.push('Mohammad');
// so we have just used spread operator to copy things. the spread operator pulls out just the contents of an array seperated by commas

/* when using spread operator on array with objects, the new array copies the reference of the objects in the original array.
that actully makes sense as spread operator copies everything in the original array and you then create a new array with
those copied information. it doesnt create new references for the objects present in the original array. lets use map() 
to solve that problem   */
console.log('-----------------------------------------------------')
const anArrayWithObject = [{ name: 'ishmam', age: 23, hobbies: ['travelling', 'knowing business'] }, { name: 'tasin', age: 22, hobbies: [] }];
const copied_AnArrayWithObject = [...anArrayWithObject.map((eachItem) => (
    {
        name: eachItem.name,
        age: eachItem.age,
        hobbies: eachItem.hobbies
    }
))];
anArrayWithObject.push({ name: 'hamza', age: 60 })
console.log(anArrayWithObject, copied_AnArrayWithObject);
/* i want to solve the problem with just map method and it workds. Maxmillian spots the same scenario but then he spots 
a problem with this approach which is if there is another array within that object then we still face the same issue
 */
const observation = anArrayWithObject.map(((eachItem) => (
    {
        name: eachItem.name,
        age: eachItem.age,
        hobbies: eachItem.hobbies
    }
)));
anArrayWithObject.push({ name: 'another person', age: 30 })
anArrayWithObject[1].hobbies[0]= 'traversing an area with car'
console.log(anArrayWithObject, observation);
/* see the console carefully. the hobbies[0] of the first index of 'observation' also changes as the anArrayWithObject changes  */

console.log('--------------------------------------------')
//8(21)---array destructuring

const nameData = ['ishmam', 'tasin', 'mr', 34];
const [firstName, lastName, ...allOtherInformationInOneArray] = nameData;
console.log(firstName,lastName );
console.log(allOtherInformationInOneArray);











