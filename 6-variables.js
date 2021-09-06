
//Global vs (local) block scope
x = 1 //x is added as a property to global object
let y = 2
{
    z = 3 //z property added to global object
    y = 4 //Writes to y in outer scope. No new global.
}

console.log(x) //1
console.log(y) //4
console.log(z) //3
console.log(global.x) //1
console.log(global.y) //undefined
console.log(global.z) //3
