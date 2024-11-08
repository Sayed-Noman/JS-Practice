// Access DOM elements
const addButton = document.getElementById('addButton');
const newItemInput = document.getElementById('newItemInput');
const todoList = document.getElementById('todoList');

// Function to add a new to-do item
function addTodoItem() {
  const taskText = newItemInput.value.trim();
  
  if (taskText !== "") {
    const listItem = document.createElement('li');
    listItem.classList.add('todo-item');
    
    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Delete';
    
    const detailsButton = document.createElement('button');
    detailsButton.classList.add('details-btn');
    detailsButton.textContent = 'Details';
    
    const showSiblingButton = document.createElement('button');
    showSiblingButton.classList.add('show-sibling-btn');
    showSiblingButton.textContent = 'Show Sibling';
    
    // Add a child div for details (initially hidden)
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details');
    detailsDiv.textContent = 'This is a task detail.';

    // Append the span, buttons, and details to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    listItem.appendChild(detailsButton);
    listItem.appendChild(showSiblingButton);
    listItem.appendChild(detailsDiv);

    // Add the new list item to the to-do list
    todoList.appendChild(listItem);

    // Clear input field
    newItemInput.value = '';
  }
}

// Function to toggle completion of a to-do item
function toggleCompletion(event) {
  const clickedElement = event.target;

  if (clickedElement.classList.contains('task-text')) {
    // Access parent (the <li>) of the clicked task
    const parentItem = clickedElement.parentElement;

    // Toggle the 'completed' class on the <li> (parent)
    parentItem.classList.toggle('completed');
  }
}

// Function to delete a to-do item
function deleteTodoItem(event) {
  const clickedButton = event.target;
  
  if (clickedButton.classList.contains('delete-btn')) {
    // Access the parent <li> of the delete button
    const parentItem = clickedButton.parentElement;
    
    // Remove the item from the DOM
    parentItem.remove();
  }
}

// Function to toggle details visibility
function toggleDetails(event) {
  const clickedButton = event.target;
  
  if (clickedButton.classList.contains('details-btn')) {
    // Access the sibling <div> that contains the details
    const parentItem = clickedButton.parentElement;
    const detailsDiv = parentItem.querySelector('.details');
    
    // Toggle visibility of the details
    detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
  }
}

// Function to demonstrate sibling navigation (next & prev siblings)
function showSiblings(event) {
  const clickedButton = event.target;
  if (clickedButton.classList.contains('show-sibling-btn')) {
    // Access parent (the <li>) of the clicked "Show Sibling" button
    const parentItem = clickedButton.parentElement;

    // Access the next and previous siblings
    const nextSibling = parentItem.nextElementSibling;
    const prevSibling = parentItem.previousElementSibling;

    // Log the next and previous siblings to the console
    console.log('Next Sibling:', nextSibling ? nextSibling.querySelector('.task-text').textContent : 'None');
    console.log('Previous Sibling:', prevSibling ? prevSibling.querySelector('.task-text').textContent : 'None');
  }
}

// Event listener for adding new items
addButton.addEventListener('click', addTodoItem);

// Event listener for toggling completion (when clicking task text)
todoList.addEventListener('click', toggleCompletion);

// Event listener for deleting items (when clicking the delete button)
todoList.addEventListener('click', deleteTodoItem);

// Event listener for toggling task details visibility (when clicking the details button)
todoList.addEventListener('click', toggleDetails);

// Event listener for showing sibling elements (next & previous siblings)
todoList.addEventListener('click', showSiblings);
