// Create a function that everytime you invoke it, it will print out the message 
// "Congrats you earn the chance!", however it can only print out the message with the first 5 excutions. 
// All the rest invoke will print out the message "Sorry you missed the chance"

const lottery = (() => {
    let i = 0
    return function() {
        if (i < 5) {
            console.log("Congrats you earn the chance!")
            i++
        } else {
            console.log("Sorry you missed the chance")
        }
    }
})()

lottery()
lottery()
lottery()
lottery()
lottery()
lottery() // missed onward
lottery() 