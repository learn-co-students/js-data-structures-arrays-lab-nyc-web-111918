// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(str){
  drivers.push(str);
}
function destructivelyPrependDriver(str){
  drivers.unshift(str);
}
function destructivelyRemoveLastDriver(str){
  drivers.pop(str);
}
function destructivelyRemoveFirstDriver(str){
  drivers.shift(str);
}
function appendDriver(str){
  return [...drivers, str];
}
function prependDriver(str){
  return [ str, ...drivers];
}
function removeLastDriver(){
  return drivers.slice(0, drivers.length-1);
}
function removeFirstDriver(){
  return drivers.slice(1);
}
