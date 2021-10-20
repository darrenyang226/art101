// Lab 6 Arrays and Objects
// A Javascript file with arrays and objects.
// @author Ryan McCarty and Darren Yang
// @link: https://darrenyang226.github.io/art101/lab6/
// @since  10.20.2021
var myTransport = ["Toyota RAV4", "bus", "rides from friends"];
var myMainRide = {
  make : "Toyota",
  model : "RAV4",
  color : "White",
  year : "2020",
  age : function(){
    return 2021 - age;
  }
}
console.log(myTransport[0]);
console.log(myTransport[1]);
console.log(myTransport[2]);
console.log("Make: " + myMainRide.make);
console.log("Model: " + myMainRide.model);
console.log("Color: " + myMainRide.color);
console.log("Year: " + myMainRide.year);
console.log("Age: " + myMainRide.age);
console.log("My transportations: " + myTransport);
console.log("My Main Ride: " + myMainRide);

document.writeln("Kinds of transportation I use: " ,myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
