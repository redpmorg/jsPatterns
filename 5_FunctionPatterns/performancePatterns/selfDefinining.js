// self overwrite with new bodies to do less work from 2nd invovation and after

var scareMe = function() {
  console.log('Boo!');
  scareMe = function() {
    console.log('DoubleBoo!');
  }
}

//adding ne property
scareMe.property = "properly";

//assigning to a new name
var prank = scareMe;

// assign as a method
var spooky = {
  boo: scareMe
}

//calling with a name
prank(); //Boo
prank(); //Boo
console.log(prank.property); //properly

//calling as method
spooky.boo(); // Boo
spooky.boo(); // Boo
console.log(spooky.boo.property); //properly

//used self defined function
//scareMe(); //Double boo
//scareMe(); //Double boo
//console.log(scareMe.property);//undefined
