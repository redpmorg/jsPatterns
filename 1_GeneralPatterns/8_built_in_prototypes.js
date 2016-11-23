/* Title: (Not) Augmenting Built-in Prototypes
 * Description: it can seriously hurt maintainability, because it will make your code less predictable
 */

 if (typeof Object.prototype.myMethod !== "function") {
	Object.prototype.myMethod = function () {
		// implementation...
	};
}

/* NOTE: You can make an exception of the rule only when all these conditions are met:
 * 1. It's expected that future ECMAScript versions or JavaScript implementations will implement this functionality
 *    as a built-in method consistently. For example, you can add methods described in ECMAScript 5 while waiting for
 *    the browsers to catch up. In this case you’re just defining the useful methods ahead of time.
 * 2. You check if your custom property or method doesn't exist already—maybe already implemented somewhere else in
 *    the code or already part of the JavaScript engine of one of the browsers you support.
 * 3. You clearly document and communicate the change with the team.
 */