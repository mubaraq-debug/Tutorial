// // operators
// //+,-,*,/,%,||,&&,>,<,>=,<=,==,===,=

// // +
// // for concatenation
// let firstName = 'John';
// let lastName = 'Doe';

// let fullName = firstName + " " + lastName;
// console.log(fullName, typeof fullName);

// // for addition
// let num1 = 5;
// let num2 = 4;

// let sum = num1 + num2;

// console.log(sum, typeof sum);

// let combination = firstName + num1;
// console.log(combination, typeof combination);

// // ++ for increment
// num1++;
// console.log(num1);

// // -
// // for subraction
// let subtraction = num1 - num2;
// console.log(subtraction);

// // for decrement
// num2--;
// console.log(num2)

// // += and -=

// let x = 3;
// let y = 2;

// // x +=1; // x = x + 1
// // y -= 1; //y = y-1
// // console.log(x, y)

// // * ----for multiplication
// let multiplication = x*y;
// x*=y //x = x*y
// console.log(multiplication)
// console.log(x)

// // //  /---division
// // let division = x/y;
// // y/=x // y = y/x
// // console.log(y)
// // console.log(division)

// // %
// let a = 4;
// let b = 3;

// let mod = a % b;
// console.log(mod);

// // conditionals
// //if statement

// // let score = 10;
// let score = '10';

// // is statement
// if (score == 10) {
//   console.log("the score is 10");
// }

// //is else
// if (score === 10) {
//   console.log("this is a number");
// } else {
//   console.log("this is not a number");
// }

// // if elseif else

// if (score < 10) {
//   console.log("the score is less than 10");
// } else if (score === 10) {
//   console.log("the score is equal to 10");
// } else if (score > 10) {
//   console.log("the score is greater than 10");
// } else {
//   console.log("this is not a number");
// }

// const username = "boy london";
// const password = "boy2024";
// const email = "boy@gmail.com";

// // if (username === "boy london" && password === "boy2024") {
// //   console.log("logged inm with username and password");
// // } else if (email === "boy@gmail.com" && password === "boy2024") {
// //   console.log("logged in with email and password");
// // } else {
// //   console.log("wrong login details");
// // }

// if((username === 'boy london' || email === 'boy@gmail.com') && password === 'boy2024') {
//     console.log('logged in')
// } else {
//     console.log('invalid login details')
// }

//switch statement
// let score = 50;
// let score;
// switch(score) {
//     case 30: 
//         console.log('grade is F');
//         break;
//     case 40:
//         console.log('grade is D');
//         break;
//     case 50:
//         console.log('grade is C');
//         break;
//     case 60:
//         console.log('grade is B');
//         break;
//     case 70:
//         console.log('grade is A');
//     default:
//         console.log('this is an invalid grade');
// }


// let score = '100';
// if(score<=39) {
//     console.log('grade is F')
// } else if(score>39 && score<=49) {
//     console.log('grade is D')
// }else if(score>49 && score<=59) {
//     console.log('grade is C')
// }else if(score>59 && score<=69) {
//     console.log('grade is B')
// }else if(score>69) {
//     console.log('grade is A')
// }else{
//     console.log('invalid score')
// }

// Loops
//for loop

// print numbers from 1 to 10
// for(let i = 1; i<=10; i++) {
//     console.log(i);
// }

let names = ['ade', 'tola', 'john'];

for(let i = 0; i<names.length; i++) {
    console.log(names[i])
}

let scores = [2,3,4,7,8,9];

for(let i = 0; i<scores.length; i++) {
    console.log('this is ur scores:' + scores[i])
}

let i = 2

while(i<20) {
    console.log(i);
    i++;
}

// let i = 30;

// do {
//     console.log(i);
//     i++;
// } while(i<5)

