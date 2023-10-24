/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Guilherme Prates Batista';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/cs121.png';  

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#profile-image');
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
// Declare uma variável de array para armazenar suas comidas favoritas
let favFoods = ['Pizza', 'Sushi', 'Chocolate', 'Hamburgers'];

// Adicione o valor armazenado nesta nova variável à sua matriz de alimentos favorita
const newFavoriteFood = 'Ice Cream';
favFoods.push(newFavoriteFood);

// Remova o primeiro elemento da matriz de alimentos favoritos
favFoods.shift();

// Remova o último elemento da matriz de alimentos favoritos
favFoods.pop();

// Anexe os novos valores da matriz ao conteúdo exibido do elemento HTML com o id de food
foodElement.innerHTML = favFoods.join('<br>');

