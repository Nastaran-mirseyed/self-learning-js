const numbers = [1, 2, 3, 4, 5, 6];
const [a,b,c] = numbers;
console.log(a, b, c);

const numbers1 = [1, 2, 3, 4, 5, 6];
const [d,,f] = numbers1;
console.log(d,f); // skip the second element

const numbers2 = [1, 2, 3, 4, 5, 6];
const [g,h,...others] = numbers;
console.log(g, h, others); // rest of the elements

const newArray = [...numbers, ...numbers1];
console.log(newArray); // concating the two arrays

const numbers4 = [1, 2, [3, 4], [5, 6], 7];
const [i, j, [k, o], [p, q], r] = numbers4;
console.log(i,j,k,o,p,q,r) // Nested arrays destructuring

function numbers3(a, b) {
  return [a + b, a * b];
}
const [sum, times,dividion="no division"] = numbers3(4,5);
console.log(sum, times, dividion); // useful in the function

//_________________________________________________________

const person = {
  nameing: "nastaran",
  age: 18,
  born: "gorgan",
  email: "zarif@gmail.com",
  password: "asgharTala007",
  address: {
    city: "tehan",
    postCode:6578231,
  }
}
const person2 = {
  favoritFood: "pitzaa",
  favoritMovie: "daredevil",
  age:23,
}

const { nameing, age } = person;
console.log(nameing, age);

const { nameing: fname } = person;
console.log(fname); // change the keyname's name

const { born = "tehran",age:old,full="my name"} = person;
console.log(born, old)// initial value

const {...others1 } = person;
console.log(fname, others1)// rest of the properties

const { address:{city,postCode} } = person;
console.log(city, postCode)// accessing the Nested object

const person3 = { ...person,... person2 };
console.log(person3);// concatin the two objects

function personDetails(user) {
  return `the person name is ${user.nameing},the favorit food is ${user.favoritFood}`;
}
console.log(personDetails(person3)) // without destructuring

function personDetails2({nameing,favoritFood="rice"}) {
  return `the person name is ${nameing}, the favorit food is ${favoritFood} `;
}
console.log(personDetails2(person3))// with destructuring

