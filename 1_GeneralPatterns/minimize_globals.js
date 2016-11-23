/* Title: Minimizing Globals
 Description: they are declared outside of any function or simply used without being declared
 */

myglobal = "hello"; // antipattern
console.log(myglobal); // "hello"
console.log(window.myglobal); // "hello"
console.log(window["myglobal"]); // "hello"
console.log(this.myglobal); // "hello"

/* Title: The Problem with Globals
 * Description: The problem is that they are shared among all the code in your JavaScript application or web page
 */

// antipatten 1
function sum(x, y) {
	// implied global
	result = x + y;
	return result;
}

// preferred 1
function sum(x, y) {
	// a variable declared inside of a function is local to that function and not available outside the function
	var result = x + y;
	return result;
}

// antipattern 2; b will be global here
function foo() {
	var a = b = 0;
	// ...
}
// the preceding code snippet will behave as if you've typed the following
var a = (b = 0);

// preferred 2
function foo() {
	var a, b;
	// ...
	a = b = 0; // both local
}