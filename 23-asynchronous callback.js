console.log("1")
setTimeout(()=>{
    print(()=>console.log("2"))
},1000) //schedule for 1s time please! (0 for ASAP)
console.log("3")

function print(callback) {
    callback();
}