// to avoid stop running my whole code when it comes to a asynce :
//create a promis:
const p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a===2) {
        resolve("success")
    } else {
        reject("faild")
    }
})
console.log(p);

//you are going to do sth after my promis is done, depend on succeed or faild condition,you have two way to react my promis:
p.then((message) => {
    console.log(`this is in the then : ${message}`);
    
}).catch((message) => {
    console.log(`this is in the catch : ${message}`);
    
})

// ------------------------------------
//crreate a promis function:
let userleft = false;
function promisExample() {
    return new Promise((resolve, reject) => {
        if (userleft) {
            reject({
                name:"user left",
                message:":((((((((("
            })
        } else {
            resolve({
                name: "user is activing",
                message:":))))))))"
            })
        }
    })
}
promisExample().then((message) => {
    console.log(`success: ${message.name} ${message.message}`);
    
}).catch((error) => {
    console.log(`faild:${error.name} ${error.message}`);
    
})

// ---------------------------------------------


let getPizza = new Promise((resolve, reject) => {
    let ordering = true;
    if (ordering) {
        resolve("your pizza will be ready soon")
    } else {
        reject("you haven't order anything yet")
    }
})

getPizza.then((message) => {
    console.log("success: "+ message);
    
}).catch((error) => {
    console.log("faild: "+error);
    
})

// -------------------------------------------

async function gettingPizza() {

    console.log("pizza ordered");

    return new Promise((resolve) => {
       setTimeout(() => {
        resolve("pizza is ready")
    }, 2000);
    }) 
    throw "error"; // reject()
}

async function eatingPizza() {
    try {
        const message = await gettingPizza();
        console.log(message);
        console.log("i am eating now");
        
        
    } catch (error) {
        console.log(error.message);
        
    }
} 

eatingPizza()

// -------------------------------------------

//1. Create a function delay(ms) that returns a Promise which resolves after ms milliseconds:
function delay() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds")
        }, 2000);
    })
}
delay().then((message) => {
    console.log(message);
    
})

// ------------------------------------------

// 2.Write a function checkAge(age) that returns:
// resolve("Allowed") if age >= 18
// reject("Not allowed") if age < 18
function checkAge(aga) {
     return new Promise((resolve, reject) => {
        if (aga>=18) {
            resolve("Allowed");
        } else {
            reject("Not allowed");
        }
    });
}
checkAge(19).then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
})

// --------------------------------------------

//3. Simulate fetching user data using a Promise and setTimeout:
async function fetching(){
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "Ali", age: 24 })
        }, 3000);
    })
}

async function fetchingData() {
    try {
        const response = await fetching()
        console.log(response);
        
    } catch (error) {
        console.log(error.message);
        
    }
}
fetchingData()

// -------------------------------------------

//4. Write a Promise that returns a number. Then .then() chain it to:
// Multiply by 2
// Add 10
// Subtract 5
const calculator=new Promise((resolve, reject) => {
  resolve(5)  
})
calculator.then((message) => {
    return message * 2; //10
    
}).then((message) => {
    return message + 10; //20
    
}).then((message) => {
    return message - 5; //15
    
}).then((result) => {
    console.log(result); //15
    
})