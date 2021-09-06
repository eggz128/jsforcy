var myStr = "Welcome to Edgewords Training";

console.log (myStr.substr (0,7))
console.log (myStr.substr (11,9))
console.log (myStr.substr (myStr.length-8))

console.log (myStr.toUpperCase()) // or .toLowerCase()

console.log (
    myStr.replace("Welcome to","Greetings from")
);
console.log (myStr.replace(/EDGEWORDS/i,"JavaScript"));

var words = myStr.split(" ")
console.log(
    words[2] // ‘Edgewords’
)
