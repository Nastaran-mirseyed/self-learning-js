//factory and constructive funcs create objects for us and these funcs prevent from code duplication happening (i mean with this kinda func we do not need repetitve objects that create code duplication).

//insted of this:

const person = {
    name: "nastaran",
    talk: function () {
       return `i am ${this.name}`
    },
    // talk() {
    //     return "hi how are you?";
    // }
}
console.log(person.talk());

const person2 = {
    name: "ali",
    talk: function () {
        return `i am ${this.name}`
    }
}
console.log(person2.talk());

// we use factory or constructor funcs to not to create repeatedly objects for one kind of thing (in this example we have "users" information):

function allPerson (names){
    return {
        talk: function () {
            return `i am ${names}`
        }
    }
}
const me = allPerson("nastaran");
const myBro = allPerson("ali");
console.log(me.talk());
console.log(myBro.talk());


// but constructor funcs don't actually return the object to you, instead "new" and "this" keywords are involved:
//the factory funcs has unnecessary part that we don't need them, construction funcs cuts out everything that is going to be the same for every order.
//we use this function to create objects without any of the repetitve steps.



//the keyword "new" does two things:
//1.create a object inside the function itself and calls it "this"
//2. and then return that object "this" to the statement where it was called
function Allpersons(names) {
    // const this={}  : 1.we does not see this
    this.name = names
    // return this    : 2.we does not see this either
}
const me2 = new Allpersons("nastaran");
console.log(me2.name);


function Allpersons2(names) {
    this.names = names;
    Allpersons2.prototype.talk=function () { // Only ONE function stored in memory (1 shared function)
        return`i am ${this.names}`;
        
    }

}
const you = new Allpersons2("jasem");
const you2=new Allpersons2("ghasem")
console.log(you.talk());
console.log(you2.talk());
 

function Allpersons3(names) {
    this.name = names
    this.talk=function () { // New function created for EVERY object (1 function per object)
        return `i am ${this.name}`
    }
}
const me3 = new Allpersons3("ali");
const me4=new Allpersons3 ("nastaran")
console.log(me3.talk());
console.log(me4.talk());

// so as you see above, none of the talk function logic has to be repeated, no matter how many of these objects i create.Why?? bc in factory funcs,everytime we call the func,a new talk method copy is created and get more memory space.but when we put the method in property,we got only one copy of the method for all objects.

function CreateElement(element, content) {
    //add a proprety element:
    this.el = document.createElement(element);
    //then:
    this.el.textContent = content;
    document.body.append(this.el);
    this.el.addEventListener("click", () => {
        console.log(this); // this is refer to the whole function as a object :  CreateElement {el: h1}
        console.log(this.el); // so in this object, el is a property: <h1>hellooo</h1>
        
    })
}
const ele = new CreateElement("h1", "hellooo");

// construction function is a "Blueprint" on which we can go ahead and create as many objects we want.



// bc of OOP structurs it good to use constructor like this:
//OOP is a style of programmer and js as a programming language support OOP;
//OOP has 4 core concepts:

//1. Encapsulation: in OOP we group related variables(properties) and functions(methods) that operate on them ,into an unit that we call it "object"; we do it against so many function that there is so many interdependency between all of them(spagetti code) and it becomes problematic somewhere. we have no parametre in their function part;the fewer number of parameters the easeir it is to use and maintain that function.

//2. Abstraction: we can hide some of our properties and methodes(details and comlexity) in our object from the outside and this gives us a couple of benefits:first is using and uderestanding an object with fewer properties and methods is easier than a object with several properties and methods and the second is, it reduces the impact of change(none of the changes will impact the rest of the application code) .

//3. Inheritance: it allows us to eliminate redundant and unnecessary code. we can define a blueprint in a generic object(like constructor func) and call it and other objects inherit its properties and methods

//4. Polymorphism: it means "many forms",the way each object of above example is rendered is different, instead of nasty switch and case, we can implement a render() in each of these objects and the render mothod will behave differently.



// classes provide a more structured and cleaner way to work with objects compair to "constructor functions",specially in Encapsulation(in classes we use # to no access from outside to our objects) and Inheritance(in classes we use super() and extends to inherit) codes are really get simpler:

class Produncts {
    constructor(product,price) {
        this.pro = product;
        this.pri = price;
    }
    productAndPrice() { // it automatically goes to the properties.
        console.log(`${this.pro}  ${this.pri}`);
    }
    priceAndTaxes(tax) {
        return this.pri + (this.pri * tax)
    }
}
const product1 = new Produncts("t-shirt", 12.34);
product1.productAndPrice()
const totalPrice = product1.priceAndTaxes(0.05);
console.log(totalPrice);


// difference between class and object:
// class is a blueprint, it defindes all the methods and properties that our object that have but it does not give it any data and information,it is just a blueprint for what our object is goining to look like.and the object is a specific version of a class that has all the extra information like the diffirent value of a property and what all the methods are going to return.the "new" keyword is how we take a class and turn it into an object and to do that we use the "constructor"  inside of the class


// super =  is a keyword that use in classes to call the costructor and access the property and method of a parent(superclass)

class Animals {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`this animal can move ${speed}`); 
    }
}
class Rabbit extends Animals {

    constructor(name, age, runSpeed) {
        super(name,age)
        this.runSpeed = runSpeed;
    }
    run(){
        super.move(this.runSpeed)
    }
}
class Fish extends Animals {

    constructor(name,age,swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;

    }
    swim() {
        super.move(this.swimSpeed)
    }
}
class Bird extends Animals {
    
    constructor(name,age,flySpeed) {
        super(name, age);
        this.flySpeed = flySpeed;

    }
    fly() {
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit("bunny", 3, 25);
const fish = new Fish("nemo", 2, 13);
const bird = new Bird("hawk", 10, 50);
console.log(rabbit.name);
console.log(fish.age);
console.log(bird.flySpeed);
rabbit.run();
fish.swim();
bird.fly();