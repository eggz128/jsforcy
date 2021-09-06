console.log("1")
console.log("2")
console.log("3")

console.log("1")
two() //Runs because of hoisting
console.log("3")

function two(){ //Function is "hoisted" to top
    console.log("2")
}