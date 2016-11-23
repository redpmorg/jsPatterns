//first example
var add = function(a) {
	return function(b) {
		return a+b;
	}
}
var addToFive = add(5);
// function(b) {
//   return 5 + b;
// }
//console.log(addToFive(1)) //6

// second example
var avg = function() {
	let a = arguments
	, tot = 0;
	for(let i = a.lenght; i--;) {
		tot +=a[i];
	}
	return tot/a.length;
};

var spiceUp = function() {
	var fn = arguments[0]
	, n = arguments[1];
	return function() {
		return fn.apply(this, n.concat(arguments[0]));
	};
};

// var doAvg = spiceUp(avg, [1,2,3,4]);
// console.log(doAvg(5)); //3


//third example
/***
 function application
 ***/
// define a function
var sayHi = function (who) {
	return "Hello" + (who ? ", " + who : "") + "!";
};

// invoke a function
sayHi(); // "Hello!"
sayHi('world'); // "Hello, world!"

// apply a function
sayHi.apply(null, ["hello"]); // "Hello, hello!"
var alien = {
	sayHi:function (who) {
		return "Hello" + (who ? ", " + who : "") + "!";
	}
};
alien.sayHi('world'); // "Hello, world!"