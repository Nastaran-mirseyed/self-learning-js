// to avoid stop running my whole code when it comes to a asynce :
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