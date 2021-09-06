for(let x = 1; x<10; x++){
    console.log(x)
}

let x = 1 //x above is block scoped to for loop, so declaring with let is fine
while(x < 10){
    console.log(x)
    x++
}
/*
var vs let
"closure" formed over x with var
let is special cased for for loops
 */
// for(var i = 0; i < 10; i++){ //all 10 with var, 0 to 9 with let
//     setTimeout(function(){ //This runs "later". if var, then loop has already run to completion and x = 10
//         console.log(i)
//     }, i*1000)
// }