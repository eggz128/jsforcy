console.log('1')
setTimeout(function () {
    console.log('2');
}, 0)
var promise = new Promise(function (resolve, reject) {
    resolve()
});
promise.then(function (resolve) {
    console.log('3');
})
    .then(function (resolve) {
        console.log('4');
    })
console.log("5")