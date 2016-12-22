/* Simple module pattern */
var Module = (function() {
    this.counter = 0;
    return {
        incrementCounter: function() {
            return ++parent.counter;
        },
        resetCounter: function() {
            counter = 0;
            return;
        }
    }
})();

/* RevealModule Pattern*/
var RevealModule = (function() {

    function setModel(inheritance) {
        return Object.create('undefined' !== inheritance ? inheritance : null);
    }

    return {
        setModel: setModel
    }
})();

/* Passing parameters */
var jq = "jQuery";
var _ = "undescore";
var NewModule = (function(first, second) {
    return first + " - " + second;
})(jq, _);

/*
var namespace = (function(){

	//privates properties here
	var privateVar = "string";

	//private method
	function privateMethod() {
		// method here
		// return ...
	}

	function otherPrivateMethod() {
		//method here
		//return ...;
	}

	// public
	return {
		// public properties
		var publicVar;

		// make a private method public
		function publicMethod() {
			return privateMethod();
		}
	}

})();
 */
