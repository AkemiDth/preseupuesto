document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  localStorage.title  = document.getElementById('title').value;
  localStorage.description = document.getElementById('description').value;
  localStorage.fecha = document.getElementById("fecha").value;
  localStorage.entrada = document.getElementById("entrada").value;

  console.log(description)

  let task = {
    title,
    description,
    entrada,
    fecha,
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let fecha = tasks[i].fecha
    let entrada = tasks[i].entrada


    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title} - ${description} - ${fecha}  - ${entrada} 
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();