function Gadget() {
    // private member
    var name = 'iPod';
    // public function
    this.getName = function() {
        return name;
    };
}

var toy = new Gadget();
// `name` is undefined, it's private
console.log(toy.name); // undefined
// public method has access to `name`
console.log(toy.getName()); // "iPod"


// not preffered
var myobj; // this will be the object
(function() {
    // private members
    var name = "my, oh my";
    // implement the public part
    // note -- no `var`
    myobj = {
        // priviledged method
        getName: function() {
            return name;
        }
    };
}());
