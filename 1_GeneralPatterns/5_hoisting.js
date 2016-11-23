// antipattern
myname = "global"; // global variable
function func() {
	alert(myname); // "undefined"
	var myname = "local";
	alert(myname); // "local"
}
func();

// the preceding code snippet will behave as if it were implemented like so:
function func() {
	var myname; // same as -> var myname = undefined;
	alert(this.myname); // "global"
	myname = "local";
	alert(myname); // "local"
}
func();