 //3600000
let allTodos = document.getElementById("allTodos");

let date = new Date();
let dd = String(date.getDate()).padStart(2, '0');
let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = date.getFullYear();
date = dd + '/' + mm + '/' + yyyy;
document.getElementById("date").textContent = "Date : "+ date;

let taskInput = document.getElementById("taskInput");

function getToDoListFromLocalStorage(){
    let stringifiedList = localStorage.getItem("todoList");
    let parsedTodoList = JSON.parse(stringifiedList);
    if (parsedTodoList === null) {
        return [];
      } else {
        return parsedTodoList;
      }
}

let todoList = getToDoListFromLocalStorage();
let todoCount = todoList.length;

function saveToLocal(){    
    localStorage.setItem("todoList", JSON.stringify(todoList));
}


function onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    allTodos.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
        return true;
        } else {
        return false;
        }
    });

    todoList.splice(deleteElementIndex-1, 1);
}

function onTodoStatusChange(checkboxId, labelId, todoId) {
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle('labelDone');
    let todoObjectIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
    
        if (eachTodoId === todoId) {
          return true;
        } else {
          return false;
        }
});
}


function createAndAppendTodo(todo){

    let todoId = "todo"+ todo.uniqueId;
    let checkboxId = "checkbox"+ todo.uniqueId;
    let labelId = "label"+ todo.uniqueId;

    let todoItemBox = document.createElement("div");
    todoItemBox.classList.add("todo-item","d-flex","flex-row","mb-2");
    todoItemBox.id = todoId;
    allTodos.appendChild(todoItemBox);
    
    let checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.checked = todo.check;
    checkboxInput.id = checkboxId;
    checkboxInput.onclick = function(){onTodoStatusChange(checkboxId, labelId, todoId);};
    todoItemBox.appendChild(checkboxInput);
    
    let labelElement = document.createElement("label");
    labelElement.textContent =  todo.text;
    labelElement.id = labelId;
    labelElement.setAttribute("for",checkboxId);
    labelElement.classList.add("label");
    todoItemBox.appendChild(labelElement);
    
    let deleteButtonContainer = document.createElement("div");
    deleteButtonContainer.classList.add("d-flex","flex-column","justify-content-center","button");
    todoItemBox.appendChild(deleteButtonContainer);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("btn", "btn-danger");
    deleteButton.onclick = function () {onDeleteTodo(todoItemBox.id);};
    deleteButtonContainer.appendChild(deleteButton);
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("bi","bi-trash-fill");
    deleteButton.appendChild(deleteIcon);

}

//let checkedStatus = false;

for (let item of todoList){
    createAndAppendTodo(item);
}

function addTodoInTodoList(){
    taskInputValue = taskInput.value;
    if (taskInputValue === ""){
        alert("Enter something to add.");
        return;
    }
    
    todoCount = todoCount + 1;
    let newTodo = {
        uniqueId: todoCount,
        text: taskInputValue,
        check: false
        };
    todoList.push(newTodo);

    createAndAppendTodo(newTodo);
    
    taskInput.value="";
}
