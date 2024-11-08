// Accessing elements
const singleElement = document.getElementById('singleElement');
const links = document.querySelectorAll('#linkList a');
const addClassButton = document.getElementById('addClassButton');
const removeClassButton = document.getElementById('removeClassButton');
const toggleClassButton = document.getElementById('toggleClassButton');
const styleButton = document.getElementById('styleButton');

// Apply inline style to a single element using .style.property
styleButton.addEventListener('click', () => {
  // Change the background color and font size directly on the element
  singleElement.style.backgroundColor = 'coral';
  singleElement.style.color = 'white';
  singleElement.style.fontSize = '22px';
});

// Add class to multiple elements using a for loop
addClassButton.addEventListener('click', () => {
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('linkStyle');
  }
});

// Add class to multiple elements using a for...of loop
removeClassButton.addEventListener('click', () => {
  for (let link of links) {
    link.classList.remove('linkStyle');
  }
});

// Toggle class on links using classList.toggle
toggleClassButton.addEventListener('click', () => {
  for (let link of links) {
    link.classList.toggle('active');
  }
});

// You can also add/remove classes with className (manually overwrite)
singleElement.addEventListener('click', () => {
  singleElement.className = 'box active'; // Adds the 'active' class along with 'box'
});
