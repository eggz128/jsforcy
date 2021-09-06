var emptyArray = []
console.log(emptyArray) // []
var notEmptyArray=[2,3] //Create array with values 2 & 3
console.log(notEmptyArray[1]) //3

notEmptyArray.push(4) //add to end
notEmptyArray.unshift(1) //add to beginning
console.log(notEmptyArray) // [1,2,3,4]

console.log(notEmptyArray.indexOf(3)) //Position of 3? Index 2

console.log(notEmptyArray.length) //4:Num of items in array
console.log(notEmptyArray[notEmptyArray.length-1]) //the last item - 4





// var removedItems = notEmptyArray.splice(1,2) //cut array
// //(start pos, num to cut optional)
// console.log(notEmptyArray) // [1,4]
// console.log(removedItems) // [2,3]
//
// //Looping
// //Array specific foreach
// notEmptyArray.forEach(function(item, index, array) {
//     console.log(`Item# ${item}, Index# ${index}`)
// })
// //Any iterable
// for (let item of notEmptyArray){
//     console.log(item)
// }
