document.addEventListener("DOMContentLoaded", function() {
    let todoForm = document.getElementById("newTaskForm");
    let todoList = document.getElementById("DaytaskList");
  
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      let removeButton = document.createElement("button");
      removeButton.innerText = "X";
  
      let newTask = document.createElement("li");
      newTask.innerText = document.getElementById("task").value;
  
      todoList.appendChild(newTask);
      newTask.appendChild(removeButton);
  
      todoForm.reset();
    });



  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
        event.target.parentNode.remove();
      }
    });
  });
  

const todoForm = document.getElementById("newTaskForm");
const todoList = document.getElementById("DaytaskList");

//   localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
for (let i = 0; i < savedTodos.length; i++) {
  let newTodoTask = document.createElement("li");
  newTodoTask.innerText = savedTodos[i].task;
  newTodoTask.isCompleted = savedTodos[i].isCompleted ? true : false;
  if (newTodo.isCompleted) {
    newTodoTask.style.textDecoration = "line-through";
  }
  DaytaskList.appendChild(newTodoTask);
}

todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  let newTodoTask = document.createElement("li");
  let taskValue = document.getElementById("task").value;
  newTodoTask.innerText = taskValue;
  newTodoTask.isCompleted = false;
  todoForm.reset();
  DaytaskList.appendChild(newTodo);

  // save localStorage
  savedTodos.push({ task: newTask.innerText, isCompleted: false });
  localStorage.setItem("todos", JSON.stringify(savedTodos));
});

todoList.addEventListener("click", function(event) {
  let clickedListItem = event.target;

  if (!clickedListItem.isCompleted) {
    clickedListItem.style.textDecoration = "line-through";
    clickedListItem.isCompleted = true;
  } else {
    clickedListItem.style.textDecoration = "none";
    clickedListItem.isCompleted = false;
  }

  for (let i = 0; i < savedTodos.length; i++) {
    if (savedTodos[i].task === clickedListItem.innerText) {
      savedTodos[i].isCompleted = !savedTodos[i].isCompleted;
      localStorage.setItem("todos", JSON.stringify(savedTodos));
    }
  }
});
