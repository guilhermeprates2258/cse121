/* W05: Programming Tasks */

// Step 1: Declare Global Variables
const templesElement = document.getElementById('temples'); // Reference to the div element for temple data
let templeList = []; // Global empty array to store the list of temples

// Step 2: Function - displayTemples()
const displayTemples = (temples) => {
  // Clear the existing temple display
  templesElement.innerHTML = '';
  
  // Process each temple in the temple array
  temples.forEach(temple => {
    // Create HTML elements
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', temple.location);
    
    // Append elements to the article
    article.appendChild(h3);
    article.appendChild(img);
    
    // Append article to templesElement
    templesElement.appendChild(article);
  });
};

// Step 3: Function - getTemples()
const getTemples = async () => {
  try {
    // Fetch temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // Convert response to JSON
    templeList = await response.json();
    // Call displayTemples function to display temple data
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Step 4: Function - reset()
const reset = () => {
  templesElement.innerHTML = ''; // Clear temple display
};

// Step 5: Function - sortBy()
const sortBy = (temples) => {
  reset(); // Clear temple display
  
  // Get the selected value from the dropdown menu
  const filter = document.querySelector('#sortBy').value;
  
  // Use switch statement to filter temples based on the selected option
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'nonutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicationDate) < new Date(1950, 0, 1)));
      break;
    case 'all':
    default:
      displayTemples(temples);
      break;
  }
};

// Step 6: Event Listener - sortBy Element change
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList) });

// Call getTemples function to fetch and display temple data
getTemples();


/* Event Listener */
