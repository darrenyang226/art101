// Lab 11 Libraries & jQuery
// A Javascript file with the use of jQuery.
// @author Ryan McCarty and Darren Yang
// @link: https://darrenyang226.github.io/art101/lab11/
// @since  11.08.2021

$("#challenge").append("<button id='challenge'>Change Color</button>");//create buttons
$("#problem").append("<button id='problem'>Change Color</button>");
$("#result").append("<button id='result'>Change Color</button>");

//create event for buttons
$("#challenge").click(function(){
  $(this).toggleClass("special");
})

$("#problem").click(function(){
  $(this).toggleClass("special");
})

$("#result").click(function(){
  $(this).toggleClass("special");
})
