var x = "Hello"
x += 10 //Hello10
console.log(x)

x += 10 //Hello1010
console.log(x)

x *= 10 //NaN
console.log(isNaN(x)) //true
console.log(isNaN(x) + true) //2
console.log(isNaN(x) + "true") //"truetrue"

console.log(x === NaN) //False(!)
console.log(x == NaN) //Dont check for NaN like this!