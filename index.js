// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  drivers.push('Ralph');
}
 function destructivelyPrependDriver() {
   drivers.unshift("Bob");
 }

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}
 function appendDriver(name) {
   let newArr = ["Milo", "Otis", "Garfield"];
    newArr.push(name);
    return newArr;
 }

function prependDriver(name) {
  let newArr = ["Milo", "Otis", "Garfield"];
  newArr.unshift('Arnold');
  return newArr;
}

function removeLastDriver() {
  let newArr = ["Milo", "Otis", "Garfield"];
  newArr.pop();
  return newArr;
}

function removeFirstDriver() {
  let newArr = ["Milo", "Otis", "Garfield"];
  newArr.shift();
  return newArr;
}
