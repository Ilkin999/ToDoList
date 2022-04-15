const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.list');
const sortBtn = document.querySelector('.sort-btn');
let deleteBtn = document.querySelectorAll('.delete-btn');
let listItems = document.querySelector("li");

let todos = [];
let storage = JSON.parse(localStorage.getItem("listName"));

storage === null ? todos = [] : todos = storage;

function refreshTodo(){
    let space = "";

    todos.forEach((item,index)=>{
        space +=
     `<li class="todo-list">
        ${item}
        <button  type="submit" onClick ="deleteTodo(${index})" class='delete-btn'>X</button>
     </li>`
    });

    list.innerHTML = space;
}
refreshTodo();


function addTodo(){

    if(!input.value == " "){
        todos.push(input.value);
        
        localStorage.setItem("listName", JSON.stringify(todos));

        input.value = "";
        refreshTodo();
    }

    else {
        alert("Please, fill write the input :)");
    }
}

addBtn.addEventListener('click', addTodo);

function deleteTodo(index){
    todos.splice(index, 1);

    localStorage.setItem("listName", JSON.stringify(todos));

    refreshTodo();
}

function sortTodo(){
    todos.sort();
    
    localStorage.setItem("listName", JSON.stringify(todos));

    refreshTodo();
}

sortBtn.addEventListener('click', sortTodo);    

document.addEventListener('keyup', logKey);

function logKey(e) {
  if (e.key === "Enter"){
    addTodo();
  }
}

