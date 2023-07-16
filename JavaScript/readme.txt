Java script :

Primitive data-types
1.Number
2.String 
3.boolean
4.Null
5.Undefined
6.Symbol
7.BigInt

Nan - Not a Number is a concept in JS which indicates the uncountable numbers in maths
0/0 = Nan
1+Nan = Nan

typeof  - it is used to print the type of element 

Variables:

    syntax:
        let variablename = value;

        const variablename = value; it is used for constant variables.

        var was previously used for declaring variables constant or variable

        variables are dynamic in js like python.

String:
    it is same of strings in python 
    concatenation is valid in js

    string methods :
        trim() trims the extra space before and after the string.
        indexof("")  gives index of given argument
        slice(0,3)
        replace("haha","gaga")

Template Literals:
It is used to add values inside the strings.
` hello ${variable} `

=== is strict equality which checks for the type of the comparision elements

console.log() is used as print statement in the js
prompt() is used to take user input;
alert() is used to pop alerts in the website.

if else 
switch 
are all same as cpp

js supports mixed array

array methods
push- adds element to the array
pop- removes element form the array
shift- remove from the start
unshift- add from the start
concat-concats two arrays
inlcudes()- returns true if element is present in the array
indexof()

slice() copies portion of the array
splice() deletes portion of the array in an array

Object literal is like a Dictionary in python
const object={
    firstName:'Aniket',
    lastName:'Kshirsgar',
}

for of loops
for(variable of iterable){
    statement
}

for(x of array){
    console.log(x)
}