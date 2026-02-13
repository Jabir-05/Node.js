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

const add = function (a,b, callback){
    var result = a+b ;
    console.log('result: ' + result); // main function work complete
    callback();
}

// add(3,2, function (){
//     console.log("add completed");
// })


add(3,4,() => console.log("add complete"));