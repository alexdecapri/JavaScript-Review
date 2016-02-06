var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function. 
//Do what you need to do in order to call your function and get 
//'Calling Jake at 435-215-9248' in your console.

var simplify = callFriend();
simplify("435-215-9248");
//because simplify is getting original info from 
//OG callFriend function, it has access to Jake!


/*

Write a function that accepts a function as it's first argument and returns a 
new function (which calls the original function that was passed in) that can 
only ever be executed once.

Once completed, add a second arguments that allows the function to be executed 
N number of times. After the function has been called N number of times, 
console.log('STAHHP');

*/


function main(cb) {
	var hasRan = false;
	return function() {
		if (hasRan === false) {
			hasRan = true;
			cb();
		}
		else {
			console.log("STAHHP");
		}
	}
}


// to test: use below information

function logHello() {
	console.log("hello, this is the only time I will display this :)");
}

var test = main(logHello);
test();