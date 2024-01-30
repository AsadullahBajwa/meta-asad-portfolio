Destructuring is a way of unpacking values 
from arrays or properties from objects into 
distinct variables.It can make your code more
concise, readable, and elegant.

Destructuring Arrays:
Suppose you have an array of numbers and you 
want to assign the first two elements to two 
variables.The old way of doing this would be:

const numbers = [1, 2, 3, 4, 5];
const first = numbers[0];
const second = numbers[1];


With destructuring, you can do this in one line:

const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;

The syntax is simple: you use square brackets on 
the left-hand side of the assignment, and list the 
variables you want to assign in the same order as 
the elements in the array. You can also skip some 
elements by using commas:

const numbers = [1, 2, 3, 4, 5];
const [first, , third] = numbers; // skip the second element

                                  Muhammad Asadullah

You can also assign default values to the variables 
in case the array does not have enough elements:

const numbers = [1, 2];
const [first, second, third = 3] = numbers; // assign 3 to third if 
                                            // the array does not 
                                            // have a third element


You can also use the rest operator (…) to collect the 
remaining elements in another array:

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers; // rest will be [3, 4, 5]


Destructuring arrays can be very handy when you want 
to swap two variables without using a temporary variable:

let a = 1;
let b = 2;
[a, b] = [b, a]; // swap a and b

Or when you want to return multiple values from 
a function:

function getMinMax(arr) {
    // assume arr is sorted
    return [arr[0], arr[arr.length - 1]];
  }
  
const [min, max] = getMinMax([1, 2, 3, 4, 5]); // min will be 1, max will be 5
           
                                            Muhammad Asadullah

Destructuring Objects:
Destructuring objects works similarly to destructuring
arrays, but instead of using square brackets, you use 
curly braces.You also need to use the same property names 
as the keys in the object. For example, if you have an 
object that represents a person, and you want to assign 
the name and age properties to two variables, you can do this:

const person = { name: "Alice", age: 25 };
const { name, age } = person;

You can also rename the variables by using a colon after 
the property name:

const person = { name: "Alice", age: 25 };
const { name: firstName, age: years } = person; // firstName will be "Alice", 
                                                // years will be 25


You can also assign default values to the variables in 
case the object does not have the corresponding properties:

const person = { name: "Alice" };
const { name, age = 25 } = person; // age will be 25 if the 
                                   // object does not have an age property

                                            Muhammad Asadullah


You can also use the rest operator (…) to collect the
remaining properties in another object:

const person = { name: "Alice", age: 25, gender: "female", 
                 occupation: "developer" };
const { name, age, ...rest } = person; // rest will be
                                       // { gender: "female", 
                                       //   occupation: "developer" }

Destructuring objects can be very useful when you want 
to access some properties of an object without having 
to write the full dot notation:

const person = { name: "Alice", age: 25, 
                 address: { city: "New York", zip: 10001 } };
const { address: { city, zip } } = person; // city will be "New York", 
                                           // zip will be 10001

Or when you want to use object properties as parameters
for a function:

function greet({ name, age }) {
    console.log(`Hello, ${name}. You are ${age} years old.`);
  }
  
const person = { name: "Alice", age: 25 };
greet(person); // Hello, Alice. You are 25 years old.

                                            Muhammad Asadullah