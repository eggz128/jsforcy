//Global(/function) scope
var x = 1
let y = 2
{               //Start block
    var x = 3       //Same x as above
    let y = 4       //New y in this block only
}               //End Block

console.log(x)
console.log(y)

/*
replace var with let for error on third line
 */
// var x = "well"
// x = "hello"
// var x = "there" //will error if let
