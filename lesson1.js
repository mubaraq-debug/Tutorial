// data types

// string data type
let x;
let name = 'John Doe';
x = name.length;
x= name.toUpperCase();
x = name.toLowerCase();
// x = name.splice(2,6)
x = name.concat(' jerry')

console.log(x)

// number
let age = 6;

// boolean

let isMarried = false;
console.log(isMarried);

let hasChildren=true;
console.log(hasChildren)

// array

let names = ['ade', 'tola', 'titi'];
let testScores = [2,4,5,4,5,5,66];

// operations on an array
names[1] = 'dede';
x = names[0];
x = `${names[1]} ${names[2]}`
x = testScores.length
x = testScores.push()


console.log(testScores)

console.log(names)

// object

const Person = {
    name: 'john doe',
    age: 45,
    addr: {
        street: 'main street',
        city: 'ogba',
        state: 'Lagos state'
    }
}

Person.name = 'Ade joel'
x = Person.name;
x= Person.age
x = Person.addr.street

console.log(x)
