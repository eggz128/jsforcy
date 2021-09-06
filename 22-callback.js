console.log("1")

dosomething(printtwo) //Note: not printtwo()
console.log("3")
dosomething(()=>console.log("4")) //callback passed as arrow function
dosomething(function mycallback(){console.log("5")}) //callback as named function

function printtwo(){
    console.log("2")
}

function dosomething(callback){
    console.log("I'm about to do what I was told")
    callback()
}