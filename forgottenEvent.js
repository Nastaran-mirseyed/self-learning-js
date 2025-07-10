//keydown= when you press down on a key and hold the key
//keyup= when you release that key
//keypress= this event is incompatible with all web browsers (does not include the orders key,just words)

document.addEventListener("keydown", (e) => {
    console.log(e.key); //good for log what key is pressed
    
})
document.addEventListener("keyup", (e) => {
    document.body.textContent=e.key // good for show the value 
    
})


// __________________________________________________________________________________________________________

console.log(window);

window.addEventListener("scroll", () => {
  
    console.log(document.documentElement.scrollTop);//this show that how much(px) user is able to scroll down
})

// ____________________________________________________________________________________________________________

const spanheight = document.querySelector("#height");
const spanwidth = document.querySelector("#width");

window.addEventListener("resize", () => {
    spanheight.textContent = window.innerHeight;
    spanwidth.textContent = window.innerWidth;
})

// _____________________________________________________________________________________________________________

// log the keyEvents above when you wanna use it
const input = document.querySelector("input");

input.addEventListener("input", () => { 
    console.log("INPUT");
    // it is going to fire off whenever the value of our input field has been chagned
})

input.addEventListener("change", () => { 
    console.log("CHANGE");
    // it is going to fire off whenever the user is done with your input field,like whenever we tap away it happen
})