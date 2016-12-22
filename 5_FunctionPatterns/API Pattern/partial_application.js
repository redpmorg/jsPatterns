var partialAny = (function(aps){
    function func(fn){
        var argsOrig = aps.call(arguments, 1); //shift the function from arguments
        return function() {
            return fn.apply( null, argsOrig.concat(['Lepadatu']));
        };
    }
	func._ = {};
	return func;
})(Array.prototype.slice);


function fullName( f, m, l ) {
	return '#' + f + m + l;
}

var sayFullName = partialAny(fullName, "Luca", partialAny._, partialAny._);

console.log(sayFullName());
