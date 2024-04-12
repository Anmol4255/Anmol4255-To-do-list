document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newTask = document.getElementById('new-task').value;
    if (newTask === '') return;
  
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${newTask}</span>
      <button class="complete-btn">Complete</button>
      <button class="remove-btn">Remove</button>
    `;
    taskList.appendChild(li);
  
    document.getElementById('new-task').value = '';
  
    const completeBtn = li.querySelector('.complete-btn');
    completeBtn.addEventListener('click', function() {
      li.classList.toggle('completed');
    });
  
    const removeBtn = li.querySelector('.remove-btn');
    removeBtn.addEventListener('click', function() {
      taskList.removeChild(li);
    });
  });