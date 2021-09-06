//Simple:
function myFunction(a, b) {
    return a + b;
}

//As a variable (anonymous function):
var x = function (a, b) {return a * b;};
var z = x(4, 3);

//As a Method:
var myObj = {
    addNum : function(a, b){ return a + b}
};

console.log(
    myObj.addNum (2,5)
)