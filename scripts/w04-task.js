/* LESSON 3 - Programming Tasks */

/* Profile Object  */




/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */

// Declare a new object literal variable named myProfile
let myProfile = {};

// Add properties to the object literal
myProfile.name = "Guilherme Prates Batista";
myProfile.photo = "images/cs121.png";
myProfile.favoriteFoods = [
  'Rice',
  'Tikka Masala',
  'Prioshki',
  'Shrimp',
  'Banana Cream Pie'
];
myProfile.hobbies = ['Reading', 'Traveling', 'Coding']; // Add your hobbies
myProfile.placesLived = [
  {
    place: 'Paraná, BR',
    length: '20 years'
  },
  // Add additional places with appropriate properties
  {
    place: 'England',
    length: '7 years'
  }
];

// DOM Manipulation (Output)
// Assign values to HTML elements using object properties
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

// Create list items for favorite foods using forEach loop
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

// Create list items for hobbies using forEach loop
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

// Create definition list items for places lived using forEach loop
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});

