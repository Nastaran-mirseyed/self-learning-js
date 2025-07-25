// HOF: a function that accepts functions as parameters OR return a function (map, filter, ...)

function sum(x) {
    return function (y) {
        return x + y;
    }
}
const suming = sum(10)(20);
console.log(suming);

// ________________________________

function greeting(name) {
    return name();
}

const sayHi = () => {
    return ` hi how are you?`;
}

console.log(greeting(sayHi));
