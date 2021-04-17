import oddOnly, {sumValues} from './sum';
import * as ops from './operations'
import { asyncAdd} from './async'
// const myFunc = function () {
//     console.log("This statement is insided the function");
// }

function myFunc() {
    console.log("This statement is insided the function");
}

// console.log(
//     "This statement is outside the function"
// )

// myFunc();

// function myFunc1(name, weather = "raining") {
//     console.log("Hello " + name + ".");
//     console.log("It is " + weather + " today.");
// }

// myFunc1("Adam");

function myFunc1(name, weather, ...extraArgs) {
    console.log("Hello " + name + ".");
    console.log("It is " + weather + " today."); 
    for (let index = 0; index < extraArgs.length; index++) {
        console.log("Extra Arg: ", extraArgs[index])
        
    }
}

// myFunc1("Adam", "sunny", "one", "two", "three");

function myFunc2(name) {
return ("Hello " +  name + ".")
}

// console.log(myFunc2("Adam"))

const myFunc3 = (nameFunction) => ("Hello " + nameFunction() + ".");

const printName = (nameFunction, printFunction) =>
    printFunction(myFunc3(nameFunction));

// printName(function() {return "Adam"}, console.log)

function messageFunction(name, weather) {
    var message = "Hello, Adam";

    if ( weather === "sunny") {
        var message = "It is a nice day";
        console.log(message);
    } else {
        var message = "It is " + weather + " today";
        console.log(message);
    }
    console.log(message);
}

// messageFunction("Adam", "raining")

function messageFunction1(weather) {
    let message = `It is ${weather} today`;
    console.log(message);
}

// messageFunction1("ranning")

let dayInWeek = 7
let pi = 3.14
let hexValue = 0xFFFF;

let name = "Adam"

if (name === "Adam") {
    console.log("Name is Adam");
} else if (name === "Jacqui") {
    console.log("Name is Jacqui")
} else {
    console.log("Name is neither Adam or Jacqui")
}

switch (name) {
    case "Adam":
        console.log("Name is Adam")
        break
    case "Jacqui":
        console.log("Name is Jacqui")
        break
    default:
        console.log("Name is neither Adam or Jacqui")
        break
}

let firstVal = 5
let secondVal = "5"

if (firstVal === secondVal) {
    console.log("They are the same")
} else {
    console.log("They are Not the same")
}


let values = [10, 20, 30, 40, 50];

let total = sumValues(values);
let odds = oddOnly(values);

console.log(`Total: ${total}, Odd Total: ${odds}`)
// console.log(`Multiply: ${ops.multiply(values)}`)
// console.log(`Substact: ${ops.substract(1000, values)}`)
asyncAdd(values).then(total => 
    console.log(`Main Total: ${total}`)
    )

async function doTask() {
    let total = await asyncAdd(values)
    console.log(`Main Total: ${total}`)
}

doTask()
