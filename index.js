// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
//const newArray = [];
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    //cats.push(name);
    //newArray.push(...cats, name);
    const newArray = [...cats, name];
    return newArray;
}
function prependCat(name) {
    const newArray = [name , ...cats];
    return newArray;
}
function removeLastCat() {
    const newArray = [...cats];
    newArray.pop();
    return newArray;
}
function removeFirstCat() {
    const newArray = [...cats];
    newArray.shift();
    return newArray;
}
