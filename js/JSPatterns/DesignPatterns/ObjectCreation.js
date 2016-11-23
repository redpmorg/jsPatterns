/** ECMA 3 **/

/* 1.Dot syntax */
var newObject = {}; // object constructor
//set
newObject.property = "Property";
//get
var property = newObject.property;


/* 2. Square brackets */
var newObject1 = new Object(); //object constructor
// set
newObject1['property1'] = "Property1";
//get
var property1 = newObject1['property1'];


/** ECMA 5 */

/* 3. Object define */
var newObject2 = Object.create(null); //object constructor
Object.defineProperty(newObject2, 'property2', {
	value: 'Property2',
	writable: true,
	enumerable: true,
	configurable: true
});

//shorthand
var setProperty = function(obj, key, value) {
	let config = {};
	config.value = 'Property';
	Object.defineProperty(obj, key, config);
}
var newObject3 = Object.create(null); // object constructor

setProperty(newObject3, 'property3_0', 'Property3_0');
setProperty(newObject3, 'property3_1', 'Property3_1');
setProperty(newObject3, 'property3_2', 'Property3_2');

/* 4. Object defineProperties */
var newObject4 = Object.create(null); // object constructor
Object.defineProperties(newObject4, {
	property4_0: {
		value: 'Property4_0',
		writable: true
	},
	property4_1: {
		value: 'Property4_1',
		writable: true
	}
});

/* Property Inheritance at creation time*/
var newObject5 = Object.create(newObject4); //object constructor
Object.defineProperties(newObject5, {
	property5_0: {
		value: "Property5_0",
		writable: true
	},
	property5_1: {
		value: "Property5_1",
		writable: true
	}

});


/** EXAMPLE **/

/* Basic constructor*/

function Car(model, year, km) {
	this.model = model;
	this.year = year;
	this.km = km;

	this.toString = function(){
		return this.model + " made in " + year + " has done " + this.km + "km";
	}
}

/* Usage

var crv = new Car('crv', 2015, 19900);
var civic = new Car('civic', 2016, 10);

console.log(civic.toString());
console.log(crv.toString());

//Problems
// Inheritance is difficult
*/

/* Prototypical inheritance*/

function Truck(model, engine, year) {
	this.model = model;
	this.engine = engine;
	this.year = year;
}

Truck.prototype.toString = function() {
	return this.model + " truck has a " + this.engine + " engine";
}


/**
 * Usage:
 *
 * var volvo = new Truck('volvo', 'diesel', 1974);
 *
 * console.log(volvo.toString());
 */