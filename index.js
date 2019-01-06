// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver() {
  drivers.shift(name);
}

function appendDriver(name) {
  let new_array = drivers.slice();
  new_array.push(name);
  return new_array;
}

function prependDriver(name) {
  let new_array = drivers.slice();
  new_array.unshift(name);
  return new_array;
}

function removeLastDriver(){
  let new_array = drivers.slice();
  new_array.pop();
  return new_array;
}

function removeFirstDriver(){
  let new_array = drivers.slice();
  new_array.shift();
  return new_array;
}
