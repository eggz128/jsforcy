var bike = {
    colour: "red",
    speed: 0,
    accelerate : function(){ this.speed++ }
};
console.log(bike.speed) // 0
bike.accelerate()
console.log(bike.speed) // 1
