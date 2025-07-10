const div = document.querySelector(".div");
const span = document.querySelector(".span");
const btn = document.querySelector("button");

document.body.addEventListener("click", () => {
    console.log("i am body") // result: i am body
});
div.addEventListener("click", () => [
    console.log("i am div") //result: i am body , i am div
])
span.addEventListener("click", () => {
    console.log("i am span"); //result: i am body , i am div ,i am span
})
btn.addEventListener("click", (e) => {
    console.log("i am button"); //result: i am body , i am div ,i am span, i am button
    e.stopPropagation() //to stop bubbling => result : i am button
    e.stopImmediatePropagation() // to stop bubbilng + all other event that btn have are not going to happen
})
btn.addEventListener("click", () => {
    console.log("i am button's sister");
})