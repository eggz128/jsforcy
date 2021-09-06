var timeDateNow = new Date()
secondsThen = timeDateNow.getSeconds()
console.log(secondsThen)

var myDate = new Date(2021, 11, 25, 7, 0) //month 11=Dec
console.log(myDate.toString())
//Sat Dec 25 2021 07:00:00 GMT+0000 (Greenwich Mean Time)
myDate.setDate(26) //or .setFullYear() .setMonth() etc…
console.log(myDate.toString()) //Sun Dec 26 2021 07:00:…
