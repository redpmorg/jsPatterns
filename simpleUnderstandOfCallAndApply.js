//personal example of JS Call and Apply

// var Persons = {
//     food: "banana",
//     eat: function() {
//         for (var i = 0; i < arguments.length; i += 1) {
//             console.log(arguments[i] + " eat " + this.food);
//         }
//         return 0;
//     }
// }
// Persons.eat("Leonard");
//
// var fridge = {
//     food: "apples"
// }
//
// Persons.eat.call(fridge, "Tibi");
//
// var bag = {
//   food: "cakes"
// }
//
// Persons.eat.apply(bag, ["Luca", "Daz"]);
//
//
// var pocket = {
//   food: "candies"
// }
//
// var other = Persons.eat.bind(pocket);
//
// other("Diana");


//constructor
var Person = function(name) {
    if (name === "undefined") {
        console.log("Please provide the person name!");
        return;
    }
    this.name = name;
    return;
};

Person.prototype.takeFood = function(food) {
    this.food = food;
};

Person.prototype.eat = function() {
    if (arguments.length === 0) {
        console.log(`${this.name} eat ${this.food}`);
    } else {
        for (let i = 0; i < arguments.length; i += 1) {
            console.log(`${arguments[i]} eat ${this.food}`);
        }
    }
    return;
}

var p = new Person("Leonard");
p.takeFood("banana");
p.eat();


var fridge = {
  food: "cakes"
}

p.eat.call(fridge, "Diana");
// console.log(p);

var pocket = {
  food: "candies"
}

p.eat.apply(pocket, ["Luca", "Daria"]);

// this is a little bit forced
var santaBag = {
  food: "chocolate"
}
var pp = p.eat.bind(santaBag);
pp("Tibi");

console.log(p);
