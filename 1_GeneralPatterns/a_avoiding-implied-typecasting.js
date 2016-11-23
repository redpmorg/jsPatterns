var zero = 0;

/* antipattern
 * JavaScript implicitly typecasts variables when you compare them.
 * That's why comparisons such as false == 0 or "" == 0 return true.
 */
if (zero == false) {
	// this block is executed...
}

// preferred
/* To avoid confusion caused by the implied typecasting,
 * always use the === and !== operators that check both the values and the type of the expressions you compare
 */
if (zero === false) {
	// not executing because zero is 0, not false
}