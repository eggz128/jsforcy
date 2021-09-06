var fruit = "orange"
switch (fruit) {
    case "mango":               //No - skip
        console.log("meh...")
        break
    case "bananna":             //No - skip
        console.log("yeuch!")
        break
    case "strawberry":          //No - skip
    case "orange":              //Yes! Go...
    case "grapes":              //No, but fall past as no break
        console.log("Yum!")     //Print
    case "blueberries":         //No but fall past as no break
        console.log("Yes please!") //Print
        break                   //Exit switch
    default:
        console.log("That's a fruit?")
        break
}
//Result:
//Yum!
//Yes please!