// function add (a,b){
//     return a+b;
// }

// var add = function (a,b){
//     return a+b;
// }

// var add = (a,b) => {return a+b}

// var add = (a,b) => a+b;

// var result = add(81,33);
// console.log(result);


// (function(a,b){
//     console.log('jabir')
// })();


// function callback () {
//     console.log("jabir is callig callback");
// }

// const add = function (a,b, callback){
//     var result = a+b ;
//     console.log('result: ' + result); // main function work complete
//     callback();
// }

// add(3,2, function (){
//     console.log("add completed");
// })


// add(3,4,() => console.log("add complete"));







// fs module :-  it's creates a file and write the message inside 
// os module :-  write a username into  a txt file with the help of 'fs' system

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);


// fs.appendFile("greeting.txt", "Hi" + user.username + '!\n', () => {
//     console.log("file is created");
// });


const notes = require('./notes.js');
console.log('server file is availabe');

var age = notes.age;

var result = notes.addnumber(age+18,10);
console.log(age);
console.log('result is now' +result);