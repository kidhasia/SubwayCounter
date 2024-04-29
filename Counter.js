let getCount = document.getElementById("countNo")
let resetCount = document.getElementById("countNo")
let undoCount = document.getElementById("countNo")
let saveEl = document.getElementById("save-para")


console.log(getCount)

let count = 0

function increment() {
    console.log("Clicked")// for debugging purpose
    count += 1
    getCount.innerText = count
}
console.log(resetCount)

function reset() {
    console.log("Clicked")
    count = 0
    resetCount.innerText = count
}

function save() {
    console.log("Clicked!")
    let countStr = count + " - "
    saveEl.innerText += countStr 
    

}
let saveResetV = document.getElementById("countNo")
function saveReset()
{
    console.log("Triggers saveRest!")
    count = 0
    saveResetV.innerText = count
}
