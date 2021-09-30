//1. Ways to print in JavaScript
// console.log("Hello world");
// alert("me");
// document.write("this is document write");

// 2. JavaScript console API
// console.log("Hello world");
// console.warn("this is warning");
// console.error("this is error");

// 3.JavaScript Variables
// What are variables : Containers to store data values
var number1 = 54;
var number2 = 32;
// console.log(number1 + number2);

// 4. Data Types in JavaScript
// String
var str1 = "this is a string";
var str2 = 'this is also a string';

//Numbers
var num1 = 323;
var num2 = 45.5;

// object
var marks = {
    rohan: 98,
    vicky: 95,
    yash: 97
}
// console.log(marks);

//booleans
var a = true;
var b = false;
// console.log(a,b);

//undefined : whose value is not defined
var und; // or like, var und = undefined
console.log(und);

//null
var n = null
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types : undefined, null, number, string, boolean, symbol
2. Refrence data types : Arrays, object
*/

//Array
var arr = [1, 2, "string", 3, 4, 5];
// console.log(arr);

//Operators in JavaScript : arithmatic operators, comparision operators, logical operators,

//Functions in javaScripts
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(3, 3,);
c2 = avg(5, 6);
// console.log(c1,c2);

//Conditional operators in JavaScript
var age = 12;
if (age > 18) {
    // console.log("You are not a kid");
}
else {
    // console.log("you are a kid");
}

//Loops in JavaScript 
var arr = [1, 2, 3, 4, 5];
// for(var i=0; i<arr.length; i++){
//     // console.log(arr[i]);
// }

arr.forEach(function (element) {  //for-each loop
    // console.log(element);
})

let j = 0; // the value of let variable stays within the function, or curly braces
const ac = 0;  //const variable can not be changed
// ac =ac+1;   //this line will show error

//Array methods:
let arr1 = ["fan", "chair", 43, null];

// console.log(arr1.length);   //length of array

arr1.pop();    //it removes the last element
// console.log(arr1);

arr1.push("zama");    //adds an element at the end of array
// console.log(arr1);

arr1.shift();   //it removes an element from start of the array
// console.log(arr1);

arr1.unshift("zama");   //it adds an element to the start of array
// console.log(arr1);

arr1.sort();   //sorts the array alphabaticaly
// console.log(arr1);

//String Methods in Javascript:
let str = "md zama khan, zama";

// console.log(str.length);

// console.log(str.indexOf("zama"));  //returns the index/position of the string

// console.log(str.lastIndexOf("zama"));   //returns the index/position of last occurence of the string (or character)

// console.log(str.slice(0,2));  //returns the substring

s = str.replace("zama", "Zama");  //replaces the string(only first occurence of the string)
// console.log(s);

//Dates in JavaScript
let date = new Date();
// console.log(date);
// console.log(date.getTime());  //shows time in seconds
// console.log(date.getFullYear());  //shows year
// console.log(date.getDay());  //shows day of week (sun=0, mon=1,...........sat=6)
// console.log(date.getMinutes());   //shows minute 

//DOM manipulation : Document Object Model
let elm = document.getElementById('click');  //to select an element from its id
// console.log(elm);
let elmc = document.getElementsByClassName('container');  //gets element by class name
// console.log(elmc);
// elmc[0].style.background = "yellow";
elmc[0].classList.add("bg-primary");   //it adds a class to the container
elmc[0].classList.add("text-success");
// elmc[0].classList.remove("bg-primary");  //it removes a class from the container
// console.log(elm.innerHTML);
// console.log(elm.innerText);

//Selecting using query
sel = document.querySelector('.container');
// console.log(sel);
sel1 = document.querySelectorAll('.container');
// console.log(sel1);

// Events in JavaScripts  : mouse clikc, mouse movment etc {Onclick event etc}

/*function clicked() {
    console.log("the button was clicked");
}

window.onload = function () {
    console.log("the document was loaded");
}

firstContainer.addEventListener('click',function(){
    console.log("clicked on container");
})

firstContainer.addEventListener('mouseover',function(){
    console.log("mouse on container (hover)");
})

firstContainer.addEventListener('mouseout',function(){
    console.log("mouse out of  container (hover)");
})

firstContainer.addEventListener('mousedown',function(){ //mouse pressed and hold
    console.log("mouse down on container");
})

firstContainer.addEventListener('mouseup',function(){  //mouse released
    console.log("mouse up when clicked on container");
})

let prevHTML = document.querySelectorAll('.container')[0].innerHTML;
firstContainer.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[0].innerHTML = "<b> We have clicked </b>"
    console.log("mouse down on container");
})
firstContainer.addEventListener('mouseup',function(){  //mouse released
    document.querySelectorAll('.container')[0].innerHTML = prevHTML;
    console.log("mouse up when clicked on container");
})*/

//Arrow Functions
sum1 =(a,b)=>{  //this is arrow function
    return a+b;
}

// function sum2(a,b){  //this is normal function
//     return a+b;
// }

// SetTimeout and setInterval : this acts as a timer, it performs the function or task after the given time range
demoFunction = ()=>{
    document.querySelectorAll('.container')[0].innerHTML = "<b> Time Out </b>"
    console.log("this is demo function for setTimeout")
}
// setTimeout(demoFunction,2000)  //This works only one time, (here time limit =2000 =2sec)

clr = setInterval(demoFunction,1000) //this works in intervals ,after every 2 secs the function will be called
        //clr (can use any variable like x,y,z....) is an id that we can give in clearinterval, it will stop the interval or timer
//Use clearinterval/cleartimeout to cancle setInterval/setTimeout