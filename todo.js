const tasks = [];
const taskList = document.getElementById("list");
const addTaskInput = document.getElementById("add");
const tasksCounter = document.getElementById("tasks-counter");

console.log("Working");

function renderList() {}

function markTaskAsComplete(taskId) {}

function deleteTask(taskId) {}

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

addTaskInput.addEventListener("keyup", handleInputKeypress);
