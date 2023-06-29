let tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function addTaskToDOM(task) {
  const li = document.createElement("li");
  li.innerHTML = `<input type="checkbox" id="${task.id}" ${task.done ? 'checked' : ''} data-id="${task.id}" class="custom-checkbox">
  <label for="${task.id}">${task.text}</label>
  <img src="bin.svg" class="delete" data-id="${task.id}" />`;

  taskList.append(li);
}

function renderList() {
  taskList.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    addTaskToDOM(tasks[i]);
  }
}

function toggleTask(taskId) {
  const newTasks1 = tasks.filter(function (task) {
    return task.id === taskId;
  });
  if (newTasks1.length > 0) {
    const currentTask = newTasks1[0];
    currentTask.done = !currentTask.done;
    tasks = newTasks1;
    renderList();
    showNotification("Task Completed Successfully!!");
    return;
  }
  showNotification("Could Not Toggele The Task");
}

function deleteTask(taskId) {
  const newTasks = tasks.filter(function (task) {
    return task.id != taskId;
  });
  tasks = newTasks;
  renderList();
  showNotification("Task Deleted Successfully!!");
}

function addTask(task) {
  if (task) {
    tasks.push(task);
    renderList();
    showNotification("Task Added Successfully!!");
    return;
  }
  showNotification("Task Can Not Be Added!!");
}

function showNotification(text) {
  alert(text);
}

function handleInputKeypress(e) {
  if (e.key === "Enter") {
    const text = e.target.value;
    console.log(text);
    if (!text) {
      showNotification("Task Can Not Be Empty!!");
      return;
    }

    const task = {
      text: text,
      id: Date.now().toString(),
      done: false,
    };
    e.target.value = "";
    addTask(task);
  }
}

function handleClickListner(e) {
  const target = e.target;
  if (target.className === "custom-checkbox") {
    const taskId = target.id;
    toggleTask(taskId);
    return;
  }
  else if(target.className === "delete")
  {
    const taskId= target.dataset.id;
    deleteTask(taskId);
    return;
  }
}

function initializeAPP() {
  addTaskInput.addEventListener("keyup", handleInputKeypress);
  document.addEventListener("click", handleClickListner);
}

initializeAPP();
