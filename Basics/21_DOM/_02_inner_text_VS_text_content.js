// Function to check content for the first list
document.getElementById('checkText').addEventListener('click', function() {
    const todoList = document.getElementById('todoList');
    
    // Get the textContent (includes all text from all child nodes, even hidden ones)
    const textContent = todoList.textContent;
    
    // Get the innerText (only visible text, excludes hidden items)
    const innerText = todoList.innerText;
    
    // Get the innerHTML (includes HTML tags and content)
    const innerHTML = todoList.innerHTML;
    
    // Display results in the console
    console.log('First List - textContent:', textContent);
    console.log('First List - innerText:', innerText);
    console.log('First List - innerHTML:', innerHTML);
  
    // Show results in an alert
    alert(`First List - textContent: \n${textContent}\n\nFirst List - innerText: \n${innerText}\n\nFirst List - innerHTML: \n${innerHTML}`);
  });
  
  // Function to check content for the second list
  document.getElementById('checkText2').addEventListener('click', function() {
    const todoList2 = document.getElementById('todoList2');
    
    // Get the textContent (includes all text from all child nodes, even hidden ones)
    const textContent = todoList2.textContent;
    
    // Get the innerText (only visible text, excludes hidden items)
    const innerText = todoList2.innerText;
    
    // Get the innerHTML (includes HTML tags and content)
    const innerHTML = todoList2.innerHTML;
    
    // Display results in the console
    console.log('Second List - textContent:', textContent);
    console.log('Second List - innerText:', innerText);
    console.log('Second List - innerHTML:', innerHTML);
  
    // Show results in an alert
    alert(`Second List - textContent: \n${textContent}\n\nSecond List - innerText: \n${innerText}\n\nSecond List - innerHTML: \n${innerHTML}`);
  });
  