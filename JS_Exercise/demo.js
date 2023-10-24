let num1 = Number(prompt("Please enter the first number:"));
let num2 = Number(prompt("Please enter the second number:"));

if (num1 <= num2) {
    for (var i = num1; i <= num2; i++) {
        if (i%2 != 0) {
            console.log(i);
        }
    }
} else {
    console.log("The first number is greater then the second one.");
}

hello = (name) => "Hello " + name;


function sumArray(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr1.length;
    let sum = [];

    if (len1 == len2) {
        for (var i=0; i<len1; i++) {
            sum.push(arr1[i] + arr2[i]);
        }
    }

    return sum;
}

var array1 = [1, 5, 8, 9, 11];
var array2 = [2, 4, 8, 1];
sumArray(array1, array2);
var arrSum = sumArray(array1, array2);

var Person = {
    firstName: "Hello",
    lastName: "World",
}

function setModel(model){
    this.model = model;
}

function setYear(year){
    this.year = year;
}

function printInfo(){
    // console.log("Info: " + this.brand + ", " + this.model + ", " + this.year + ".");
    console.log(`Info: ${this.brand}, ${this.model}, ${this.year}.`);
    // console.log("Info: " + this.brand + ", " + this.model + ", " + this.year + ".");
}

function Car (brandName){
    this.brand = brandName;
    this.model = 'xxx';
    this.year = 0;
    this.setModel = setModel;
    this.setYear = setYear;
    this.print = printInfo;
}

var car = new Car("BMW");
car.setModel("X5");
car.setYear("2024");
car.print();




