// JavaScript remembers where a function was written, and it gives that function access to variables that were in scope at the time it was defined, not where it is executed.

function outer() {
    let name = "Nastaran";
  
    function inner() {
      console.log(name); // ✅ Has access to name
    }
  
    inner();
  }
outer();

// __________________________________________________________________

  function inner() {
    console.log(name); // ❌ ReferenceError: name is not defined
  }
  
  function outer() {
    let name = "Nastaran";
    inner();
  }
outer();
    