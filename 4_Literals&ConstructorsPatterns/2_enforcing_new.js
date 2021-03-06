/* Title: Enforcing new
 * Description: when you forget `new`, `this` inside the constructor will point to the global object
 */

// constructor
function Waffle() {
	this.tastes = "yummy";
}

// antipattern
// forgotten `new`
var good_morning = Waffle();
console.log(typeof good_morning); // "undefined"
console.log(window.tastes); // "yummy"

// preferred
var good_morning = new Waffle();
console.log(typeof good_morning); // "object"
console.log(good_morning.tastes); // "yummy"

// preferred
// You can also guarantee that this situation never occurs by guaranteeing new instances;
// Similar to how you can call $() and $.Deferred() in the same way as new $() and new $.Deferred():
function Waffle() {
	if (!(this instanceof Waffle)) {
		return new Waffle();
	}
	this.tastes = "yummy";
}
var good_morning = new Waffle();
var good_evening = Waffle();
console.log(typeof good_morning); // "object"
console.log(good_morning.tastes); // "yummy"
console.log(typeof good_evening); // "object"
console.log(good_evening.tastes); // "yummy"