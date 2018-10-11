// Write a program to check whether a number is a palindrome or not?
// tacocat

// A function to check whether or not a number is a palindrome

// var pal = ['tacocat'];

function palindromeChecker(palindrome) {
  var array = [];
  array = palindrome.split("");
  // console.log(array);
  var reversedPal = array.reverse();
  // console.log(reversedPal);
  if (array.equals(reversedPal)) {
    return console.log(palindrome +" is a Palindrome!")
  } else {
    return console.log(palindrome + "is not a palindrome.")
  }
}

palindromeChecker("123");
