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

They work with keys and values,

'''
const object = {
name: "Lucas"
}

object.age = 24

delete object.name

console.log(object.name)
// would log {age: 24}
'''

#### VS terminal

- node -v: will give your js version,
- node file: runs your javascript file,
