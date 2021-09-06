async function increment(num) {
    await new Promise(resolve => setTimeout(resolve, 2000)); //2s delay
    return num + 1
}

console.log(increment(5)) //returns the promise which may or may not have resolved
increment(5).then(result => console.log(result))