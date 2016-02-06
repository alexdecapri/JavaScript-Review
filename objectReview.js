//Make a 'favoriteThings' object that contains the following keys: band, 
//food, person, book, movie, holiday. Have the values to those keys be 
//your favorite thing in that category. 

var favoriteThings = {
  band: "Coldplay",
  food: "pasta",
  person: "Einstein",
  book: "The Two Tales",
  movie: "Focus",
  holiday: "Christmas"
};

//After you've made your object, add another key named 'car' with the 
//value being your favorite car and then another key named 'brand' with 
//the value being your favorite brand.

favoriteThings.car = "Maserati";
favoriteThings.brand = "Juniper";

//Now change the food key in your favoriteThings object to be 
//'Lettuce' and change the book key in your favoriteThings object to be 
//'50 Shades of Gray'. 

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking 
//to make sure that each value is truthy. If it's not truthy, remove it 
//from the object. hint: 'delete'.

for (var prop in user) {
  if (user[prop] === undefined || user[prop] === false || user[prop] === 0 || user[prop] === "" || user[prop] === NaN || user[prop] === null) {
    delete user[prop];
  }
}

//Once you get your truthy object, Change the remaining values in the 
//object to be specific to you (name: 'your name', username: 'your username'), 
//rather than my information.

user.name = "Alex";
user["pwHash"] = "passwordsfhgsglsghd";
user.username = "alexdecapri";

//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your 
//methodCollection object. One called 'alertHello' which alerts 'hello' 
//and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {
  alert("hello");
};

methodCollection.logHello = function() {
  console.log("hello");
};

//Now call your alertHello and logHello methods. 

 methodCollection.alertHello();
 methodCollection.logHello();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an 
//object with the keys being all the vowels in that string, and the 
//values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var string = 'hello';
function voweler(str) {
  var vObject = {};
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) !== -1) {   //indexOf returns -1 when not found... so this says "if it was found"
      if (!vObject.str[i]) {  //if vObject key doesn't exist (Falsey) make it truthy so this runs (with the "!")
        vObject.str[i] = 1;
      }
      else {
        vObject.str[i]++;
      }
    }
  }
  return vObject;
}




/* LOTS OF INFO ON HOW TO DO THIS

    // if (letters[i] === "a") {
      if (vowels.indexOf(letters[i]) !== -1) { //was found
      // if vObject.a doesn't exist already.... create it with value 1
      if (!vObject[letters[i]]) { //vObject.a vObject.e vObject.i....
        vObject[letters[i]] = 1;
      } else {
        vObject[letters[i]]++;
      }
      // if vObject.a exists already.... add one
      // vObject.a = 1;
    }
  }
  return vObject;
}
*/






