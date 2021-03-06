/* Title: Avoiding eval()
 * Description: avoid using eval()
 */

// antipattern 1
var property = "name";
alert(eval("obj." + property));

// preferred 1
alert(obj[property]);


/* antipattern 2
 * It's also important to remember that passing strings to setInterval(), setTimeout(),
 * and the Function() constructor is, for the most part, similar to using eval() and therefore should be avoided.
 */
setTimeout("myFunc()", 1000);
setTimeout("myFunc(1, 2, 3)", 1000);

// preferred 2
setTimeout(myFunc, 1000);
setTimeout(function () {
	myFunc(1, 2, 3);
}, 1000);

// in supported browsers (i.e. not IE)
setTimeout(myFunc, 1000, 1, 2, 3);
