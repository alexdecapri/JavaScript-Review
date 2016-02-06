//Create a Animal Constructor that has the following parameters. species, 
//name, legs, color, food (which is an array of foods they can eat).

function Animal(species, name, legs, color, food) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it 
//(not in constructor form) that has the following parameters. name, age, 
//height, gender

function person(name, age, height, gender) {
  var personObj = {
    name: name,
    age: age,
    height: height,
    gender: gender
  };
  return personObj;
}


//Create a animal array and a person array.

var animal1 = new Animal("giraffe", "bob", 4, "orange", "grass");
var person1 = person("alex", 21, "6 feet", "male");


//Create two instances of Animal and push those into your animal array

  //code here


//Create two instances of person and push those into your person array.

  //code here


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/