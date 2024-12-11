# JavaScript

This is a introductory course for javascrip that end's i intermediate and advanced chalanges going through detailed concepts, good practices and the syntax of the language.

## decraring variables

What are they? Spaces in the RAM to store data,

- const name = value: cant be manipulated throughout the code
- let name = value: can be manipulated throughout the code

## types of veriables

- String: text in general, if you add two strings you get one string in front of the other, also used for numbers tha arent going to be used for mathmatical operations,
- Caracter: one single caracter,
- Date,
- Hours,
- Number: You can do mathematical operations with them,
- Integer: Hole numbers,
- Float: Decimal numbers,
- Complete numbers, dont known,
- Boolean: True or False,

## operators

- =: variable is equal to
- ==: checks if variable is equal to
- ===: checks if variable and type are equal to
- +: number or string plus number or string
- \*: number multiplied by number
- /: number divided by number
- %: rest of the division by number

## conditional structures

- `if (condition) {code}` excutes the code when the condition is true,
- `else if (condition) {code}` excutes the code when the condition is true, works if an `if` condition was false before,
- `else {code}` executes if the conditions before are false,

## functions

It's a small part of the code to make a algorithm that can be called on demand
To declare a function simply type `function name (parameters) {processing and output}`
Parameters is data given to the function as it's called, and this data usually is used withing the functions processing,
`return` is a parameter given inside the function to determine the value given uppon the use of the function.
Important to notice that a function is a object just like any other integer or string daclered through a const or let.

### função imediatamente invocada

The exemple bellow is a function that would be executed just as it's processed, usually used for codes that are going to be used once,

'''
( function () {
console.log("")
})()
'''

## objects

They work with keys and values, functions as valeus are called method, and since it's on the same object it can use other values from the object using `this.key`

'''
const object = {
name: "Lucas"
}

object.age = 24

delete object.name

console.log(object.name)
// would log {age: 24}
'''

To call data inside the object you can either use `object.key` or `object[key]`

### class

There is a way to create modules for objects to improve the dinamic of the code, this is called creating a class, required and values and to be created automatically are given by the `constructor` atribute,

'''

class person {
name
age
dateOfBirth
constructor(name, age) {
this.name = name
this.age = age
this.dateOfBirth = 2024 - this.age
}
describe() {
console.log(
`Hy ${this.name} welcome. Good to know that you are ${this.age}, you must have been born in ${this.dateOfBirth}`
)
}
}
'''

## array

Are lists of data, it's defined by square brackets and each item is separated with a comma,

### methods

- `.push('')`: add's data to the array, by default it's going to add to the and of the list.
  > If you say a item of the list `array[0] = 'a'` you would replace the 0 item of the list.
- `.pop()`: Takes the last item from the list and give't as a veriable, after the use the list no longer has that item,
- `.shift()`: similar to `.pop()` but for the first item.

#### VS terminal

- node -v: will give your js version,
- node file: runs your javascript file,

#### dinamic string

Simply use backtick '\`' insteads of quotes or double quotes and for dinamic values use `&{}`
