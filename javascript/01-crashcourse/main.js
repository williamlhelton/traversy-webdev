//alert('File Linked');

/*
    Variables
*/

/*
var number1 = 35;
var number2 = 40;
alert('My favorite number is ' + number1 + number2);

var number1 = '35';
var number2 = '40';
alert('My favorite number is ' + number1 + number2);
*/

/*
    Arrays
*/

var colors = ['red', 'blue', 'green'];
//alert(colors[1]);

var colors1 = new Array('red', 'yellow', 'orange');
//alert(colors1);

colors.push('purple');
//alert(colors);

var numbers = [5,77,6,43,1];
//alert(numbers[0] + numbers[4]);

//alert(numbers.length);

//alert(numbers.sort());

//alert(numbers.reverse());

/*
    Loops
*/

for(var i = 0; i < 10; i++){
    console.log('i is ' + i);
}

var i = 0;
while(i < 10){
    console.log('i is now ' + i);
    i++;
}

//foreach works with arrays
var numbers1 = [33,254,19,9,123,2,0,2];
numbers1.forEach(function(number){
    console.log(number);
});

for(var i = 0; i < numbers1.length; i++){
    console.log(i + ' is ' + numbers1[i]);
}

/*
    Conditionals
*/
if(1 == 1){
    console.log('1 == 1');
}

var x = 3;
var y = 4;
if(x != y){
    console.log('not equal');
}

if(x != y && x == 3 || 1 == 1){
    console.log('good');
}

//switch statement
/*
var fruit = 'apple';

switch(fruit){
    case "banana":
        alert('I hate bananas');
        break;
    case "apple":
        alert('I love apples');
        break;
    default:
        alert('eh');
}
*/

/*
    Objects
*/

//basic object
var person = {
    firstName: 'Brad',
    lastName: 'Traversy',
    age: 34,
    children: ['Brianna', 'Nicholes'],
    address:{
        street:'555 address',
        city:'Boston',
        state:'MA'
    },
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.firstName);
console.log(person.children[0]);
console.log(person.address.city);
console.log(person.fullName());

//another basic object
var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

apple.describe = function(){
    return 'An apple is the color ' + this.color + ' and is the shape ' + this.shape;
}

console.log(apple);
console.log(apple.describe());

//constructor
function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
        return 'A ' + this.name + ' is the color ' + this.color + ' and is the shape ' + this.shape;
    }
}

var melon = new Fruit('melon', 'green', 'oval');
console.log(melon);
console.log(melon.describe());

//
var users = [
    {
        name: 'John',
        age: 30
    },
    {
        name: 'Mark',
        age: 32
    },
    {
        name: 'Shelly',
        age: 86
    }
]

console.log(users[0].name);
console.log(users);

/*
    Events
*/

//onClick events
function doClick(){
    alert('You Clicked!');
}

function changeText(id){
    id.innerHTML = 'Good job!';
}

function changeHeading(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'You did it!';
}

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function showDate2(){
    var time = document.getElementById('time2');
    time.innerHTML = Date();
}

function clearDate2(){
    var time = document.getElementById('time2');
    time.innerHTML = '';
}

function bragAlert(){
    alert('I am best');
}

function changeBackground(x){
    console.log(x.value);
    var body = document.getElementById('body');
    body.style.backgroundColor = x.value;    
}

/*
    Forms
*/
function validateForm(){
    var firstName = document.forms["myForm"]["firstName"].value;

    if(firstName == null || firstName == ""){
        alert("First name is required");
        return false;
    }

    if(firstName.length < 3){
        alert("First name is too short!");
        return false;
    }
}