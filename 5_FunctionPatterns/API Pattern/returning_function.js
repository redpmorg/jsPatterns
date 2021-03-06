/* Title: Returning functions
 Description: one function returns another function or create another function on-demand
 */

var setup = function () {
	console.log(1);
	return function () {
		console.log(2);
	};
};

// using the setup function
var my = setup(); // alerts 1
my(); // alerts 2

// Your setup function can store some private data in a closure and use that data somehow.
// Here setup() creates a counter function, which gives a next ID for example. But the count variable is not exposed.
var setup = function () {
	var count = 0;
	return function () {
		return ++count;
	};
};

// usage
var next = setup();
//next(); // returns 1
//next(); // returns 2
//next(); // returns 3