/** Giving back change
*** Write a program that will provide
*** the fewest number of coins as change,
*** when given an amount of change under $1.00.
*** use Quarters (25), Dimes (10), nickles (5), & pennies (1).
**/
// 95 cent
// A function that gives back the most efficient denominations for change

var dollar = 100;
var quarter = dollar / 4;
var dime = dollar / 10;
var nickle = dollar / 20;
var penny = dollar / 100;


var change = 95;


function changeMaker(change) {
  console.log(change);
  var numberOfQuarters = change / 25;
  console.log(numberOfQuarters);
  var moduloQuarter = change % 25;
  console.log(moduloQuarter);

  if(moduloQuarter != 0)
  {

  } else {
    var array = [ ];
    array = numberOfQuarters.split();
    var
    return
  }

  console.log("Your change is " + numberOfQuarters + " quarters")

}

changeMaker(95);
