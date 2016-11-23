'use strict';
var global = (function(){
	return this || (1, eval)('this');
}());


/*
	// explain of (1, eval) vs eval()

	// global object x
	var x = "outer";
	(function(){
	// closure object x
		var x = "inner";
		eval('console.log("direct call: " + x)'); //yelds direct call: inner
		(1, eval)('console.log("indirect call: " + x)'); // yelds indirect call: outer

	})();

*/