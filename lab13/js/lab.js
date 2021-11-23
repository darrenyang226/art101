// Lab 13:Loops
// A Javascript file with the use of loops.
// @author Ryan McCarty and Darren Yang
// @link: https://darrenyang226.github.io/art101/lab13/
// @since  11.21.2021

function oneLongString(){
  var oneLongString = "";
  for (var num=1; num <= 200; num++){
    if (num%105 == 0){
      console.log("FizzBuzzBoom!");
      oneLongString += " FizzBuzzBoom! ";
    }else if (num%35 == 0){
      console.log("BuzzBoom!");
      oneLongString += " BuzzBoom! ";
    }else if (num%21 == 0){
      console.log("FizzBoom!");
      oneLongString += " FizzBoom! ";
    }else if (num%15 == 0){
      console.log("FizzBuzz!");
      oneLongString += " FizzBuzz! ";
    }else if (num%3 == 0){
      console.log("Fizz!");
      oneLongString += " Fizz! ";
    }else if (num%5 == 0){
      console.log("Buzz!");
      oneLongString += " Buzz! ";
    }else if (num%7 == 0){
      console.log("Boom!");
      oneLongString += " Boom! ";
    }else {
      console.log(num);
      oneLongString += num;
    }
  }
  console.log(oneLongString);
  $("#output").text(oneLongString);
}
oneLongString();
