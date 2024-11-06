// Get element by ID
const mainHeading = document.getElementById('main-heading');
console.log(mainHeading); // Logs the <h1> element
mainHeading.innerText = "Hello, World!"; // Modify text content

// Get elements by class name
const descriptionElements = document.getElementsByClassName('description');
console.log(descriptionElements); // Logs HTMLCollection of <p> elements with class "description"
Array.from(descriptionElements).forEach((desc, index) => {
    desc.innerText += ` (Description ${index + 1} modified)`; // Modify each description
});

// Get elements by tag name
const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs); // Logs HTMLCollection of <p> elements
paragraphs[0].innerHTML = "<strong>This is the first paragraph (modified).</strong>"; // Modify HTML of the first <p>

// Get elements by name
const usernameInput = document.getElementsByName('username');
console.log(usernameInput); // Logs NodeList of elements with name "username"
if (usernameInput.length > 0) {
    usernameInput[0].value = "Updated User"; // Modify value of the input
}

// Query selector
const sectionTitle = document.querySelector('h2');
console.log(sectionTitle); // Logs the <h2> element
sectionTitle.innerText = "Updated Section Title"; // Modify text content

// Query selector all
const allDescriptions = document.querySelectorAll('.description');
console.log(allDescriptions); // Logs NodeList of elements with class "description"
allDescriptions.forEach((desc, index) => {
    desc.innerText += ` (Description ${index + 1} modified)`; // Modify each description
});

// Attribute selector example
const dataInfoElements = document.querySelectorAll('[data-info]');
console.log(dataInfoElements); // Logs NodeList of elements with a data-info attribute
dataInfoElements.forEach((elem) => {
    elem.innerText += " (Data Info attribute present)"; // Modify text for elements with data-info
});

// Get document children
const children = document.body.children;
console.log(children); // Logs all child elements of the body

// Get first and last child of the document
console.log(document.firstChild); // Logs the first child of the document
console.log(document.lastChild); // Logs the last child of the document

// Get child nodes (including text nodes)
const childNodes = document.body.childNodes;
console.log(childNodes); // Logs all child nodes of the body

// Get parent node
const parent = mainHeading.parentNode;
console.log(parent); // Logs the parent node of the <h1>

// Get previous and next siblings
const previous = mainHeading.previousSibling;
console.log(previous); // Logs the previous sibling node of <h1>
const next = mainHeading.nextSibling;
console.log(next); // Logs the next sibling node of <h1>

// Get previous and next element siblings
const previousElement = mainHeading.previousElementSibling;
console.log(previousElement); // Logs the previous sibling element of <h1>
const nextElement = mainHeading.nextElementSibling;
console.log(nextElement); // Logs the next sibling element of <h1>

// Active element
const activeElement = document.activeElement;
console.log(activeElement); // Logs the currently focused element in the document

// Button to change text on click
const changeTextButton = document.getElementById('change-text');
changeTextButton.addEventListener('click', () => {
    mainHeading.innerText = "Text Changed on Button Click!"; // Modify text on button click
});

// get Elements ByClass Name
const contentElements = document.getElementsByClassName('content');
console.log(contentElements); // Logs HTMLCollection of elements with class "content"
if (contentElements.length > 0) {
    contentElements[0].innerText = "This content has been updated!"; // Modify content text
}
