var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 
//'threeItems'
//alert the result of your function

function last(arr) {
	return arr[arr.length-1];
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

function rmvEvens(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number 
//between 0 and 30 and an array full or numbers 'randomArray'. Your 
//job is to write a function that will get a random number, then 
//loop through the array to see if that random number is in the 
//array. If it is, alert true, if it's not, alert false

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

function randomNum(arr) {
	var getRandomArbitrary = function() {
  		return Math.floor(Math.random() * (30 - 0) + 0);
	};
	var random30 = getRandomArbitrary();
	for (var i = 0; i < arr.length; i++) {
		if (random30 === arr[i]) {
			return true;
		}
		else {
			return false;
		}
	}
}

// chose to return T/F instead of alert, because alert would pop up for each iteration

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 
//to the end of second. When you run this, first should be just 
//[1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created 
//your copy correctly.

var first = [1,2,3,4,5];
var second;

  //code here

  var second = first.slice(0); //creates copy
  second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence 
//variable, and returns the longest word in that sentence.

var sentence = "Dev Mountain is the best"

function longest(sentence) {
	var words = sentence.split(" "); //this is an array
	var longest = words[0];
	for (var i = 0; i < words.length; i++) {
		if (words[i].length > longest.length) {
			longest = words[i];
		}
	}
	/*  forEach method!! LEARN THIS
	words.forEach(function(item) {
		if (item.length > longest.length) {
			longest = item;
	});
	*/
	return longest;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem 
//variable and capitalizes every word 

var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery 
//But A Misunderstood Object?


function capitalize(sentence) {
	var words = sentence.split(" ");
	var capsArr = [];

	words.forEach(function(item) {
		var capsWord = item
		capsArr.push(item.substr(0, 1).toUpperCase() + item.substr(1)); //look into substring method if you forget how to do this
	});
	return capsArr.join(" "); //joins the array of words back together to one string of a sentence
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";

//Write a function called vowelCounter that takes in a string 
//(theOdyssey) and returns how many vowels are in that string.

/*
INCORRECT
function vowelCounter(str) {
	var vowels = [];
	var allLetters = str.split("");
	for (var i = 0; i < allLetters.length; i++) {
		if (allLetters[i] === "a" || "e" || "i" || "o" || "u") { //would need to write allLetters[i] === "a" || allLetters[i] === "e" in this way for this to properly analyze
			vowels.push(allLetters[i]);
		}
	}
	return vowels.length;
}
*/




function vowelCounter(str) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var result = 0; //or result = [];
	for (var i = 0; i < str.length; i++) {
		// if str[i] is in vowels array 
		if (vowels.indexOf(str[i]) !== -1) {
			result++; //or result.push(str[i]);
		}
	}
	return result; //or return result.length;
}















