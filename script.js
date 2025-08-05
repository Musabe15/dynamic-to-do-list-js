document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  function addTask() {
    const taskText = taskInput.value.trim();  // Get and trim the input

    if (taskText === "") {
      alert("Please enter a task.");
      return; // Stop if empty
    }

    const li = document.createElement('li');  // Create <li> element
    li.textContent = taskText;

    const removeButton = document.createElement('button');  // Creat a remove button
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // When remove button clicked, remove the <li> from the list.
    removeButton.onclick = function () {
      taskList.removeChild(li);      
    };

    li.appendChild(removeButton);  // Add button to <li>
    taskList.appendChild(li);  // Add <li> to task list

    taskInput.value = ""; // Clear input field    
  }

  // Click event for the "Add task" button
    addButton.addEventListener('click', addTask);

    // Keypress event for the input field (Enter key)
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
})