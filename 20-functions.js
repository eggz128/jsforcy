// Immediately Invoked Function Expression
//runs immediately -- doesn't have to be called
(function(){ console.log("Anon") })();  //anonymous
(function someName(){ console.log("someName") })(); //with a name

// (fat) arrow function expressions
let something;
something = () => "edgewords";
let y = something() //returns "edgewords"
console.log(y)

//arrow function passed to someMethod() as parameter
let obj = {
    someMethod(arg){console.log(arg(3))} //console log result of passed function with argument of 3
}
obj.someMethod( x => x * 2 )
obj.someMethod( x => x ** x) //Exponent(power) operator
