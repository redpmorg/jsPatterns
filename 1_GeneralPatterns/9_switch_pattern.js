/* Style conventions:
 * 1. Aligning each `case` with `switch` (an exception to the curly braces indentation rule).
 * 2. Indenting the code within each case.
 * 3. Ending each `case` with a clear `break`;.
 * 4. Avoiding fall-throughs (when you omit the break intentionally). If you're absolutely convinced
 *    that a fall-through is the best approach, make sure you document such cases, because they might
 *    look like errors to the readers of your code.
 * 5. Ending the `switch` with a `default`: to make sure there's always a sane result even if none of
 *    the cases matched.
 */
 var inspect_me = 0
 , result = '';
 switch (inspect_me) {
 case 0:
	result = "zero";
	break;
 case 1:
	result = "one";
	break;
 default:
	result = "unknown";
 }