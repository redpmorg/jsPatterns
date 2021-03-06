/* Title: Callback patterns
 Description: when you pass function A to function B as a parameter, function A is a callback function
 */


 var complexComputation = function () {
	/**
	* do some complex stuff and
	* return a node
	**/
};

var findNodes = function (callback) {
	var nodes = [];
	var node = complexComputation();
	// call if callback is callable
	if (typeof callback === "function") {
		callback(node);
	}
	nodes.push(node);
	return nodes;
};

// a callback function
var hide = function (node) {
	node.style.display = "none";
};

// find the nodes and hide them as you go
var hiddenNodes = findNodes(hide);

// you can also use an anonymous function, like this:
var blockNodes = findNodes(function (node) {
	node.style.display = 'block';
});