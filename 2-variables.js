var myName = 'John Doe'
console.log(myName)
var myStr = "He said \"Hi\" to me" //Double quotes "escaped" to avoid terminating string
var myStr = 'He Said "Hi" to me' //or use single quotes to start/end
console.log(myStr)
var myStr = `He said "Hi" to ${myName}` //template literal to include myName in string
//var myStr = 'He said "Hi" to ' + myName //or older way using concatination
console.log(myStr)
