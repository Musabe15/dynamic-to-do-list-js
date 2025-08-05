document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Load tasks from local storage
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => {
      addTask(taskText, false); // Don't re-save when loading
    });
  }

  // Add a task (optionally save to local storage)
  function addTask(taskText, save = true) {
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Remove task from DOM and local storage
    removeButton.onclick = function () {
      taskList.removeChild(li);

      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      const updatedTasks = storedTasks.filter(task => task !== taskText);
      localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = "";

    // Save to local storage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      storedTasks.push(taskText);
      localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
  }

  // Add task on button click
  addButton.addEventListener('click', addTask);

  // Add task on Enter key press
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Initial load
  loadTasks();
});
