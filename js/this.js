//the keyword "this" refers to the object that is executing the current function — but its value depends on how the function is called, not where it’s written:


//1.When used inside a method of an object, "this" refers to that object:
const person = {
    name: "Ali",
    greet: function () {
      console.log("Hello, " + this.name);
    },
  };
  
person.greet(); // "Hello, Ali"
  
// _________________________________________________________________________________

//2. In a regular function "this" refers to the global object (window in browsers):
function show() {
    console.log(this);
  }
  
show(); // In browser: `window` (or `undefined` in strict mode)

// _________________________________________________________________________________

//3.Arrow functions don’t have their own "this" — they inherit "this" from the outer function (lexical scope):
const person2 = {
    name: "Nastaran",
    sayHi: function () {
      setTimeout(() => {
        console.log("Hi, " + this.name); //In this version, the arrow function doesn’t create a new this, so it uses the this from sayHi, which is the person object.
      }, 1000);
    },
  };
  
  person2.sayHi();
  // Output after 1 second: ✅ "Hi, Nastaran"
  
//   _________________________________________________________________________________

//4.If you're in a DOM event listener with a regular function:
const button=document.querySelector("button");
button.addEventListener("click", function () {
    console.log(this); // refers to the button element
  });
//But with arrow functions:
button.addEventListener("click", () => {
    console.log(this); // refers to outer scope (probably window)
  });
  