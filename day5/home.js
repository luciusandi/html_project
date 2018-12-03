var my_name;
var my_age;
var my_birthdate;

my_name = "Stackup";
my_age = 23;
my_birthdate = "20/03/1988";

console.log(my_name);
console.log(my_age);
console.log(my_birthdate);

var my_address = "JTC LaunchPad";

var my_test;

console.log( typeof(my_test) );
console.log( typeof(my_name) );
console.log( typeof(my_age) );

var firstName;
var lastName;
var space;

firstName = "Nick";
lastName = "Test";
space = " ";

var fullName = firstName + space + lastName;

var fullName1 = firstName + 5 + lastName; 

console.log(fullName);
console.log(fullName1);

var qty = 2;
var total = 200;
var qtyTotal = qty + total;

console.log(qtyTotal);


var firstNumber;
var secondNumber;
var totalNumber;

firstNumber = 10;
secondNumber = "10";
totalNumber = firstNumber * secondNumber;

console.log(totalNumber);

var compareResult;

compareResult = (firstNumber == secondNumber);

console.log(compareResult);

compareResult = (firstNumber === secondNumber);
console.log(compareResult);

var testA = "Singapore";
var testB = "Singapore";
var compareTest = (testA != testB);
console.log(compareTest);


var myHtmlValue;

myHtmlValue = document.getElementById("my_name").value;
console.log(myHtmlValue);


