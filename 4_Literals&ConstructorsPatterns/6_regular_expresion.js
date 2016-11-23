/* Title: Regular Expression Literal
 * Description: the regular expression literal notation is shorter
*/

// antipattern
var re = new RegExp("\\\\", "gm");

// preferred
var re = /\\/gm;