const addBtn = document.querySelector('.add-btn');
const input = document.querySelector('.todo-input');
const list = document.querySelector('.list');
const sortBtn = document.querySelector('.sort-btn');
let deleteBtn = document.querySelectorAll('.delete-btn');
let listItems = document.querySelector("li");


let todos = [];

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

function addTodo(){

    if(!input.value == " "){
        todos.push(input.value);
        let counts = todos.length;
        localStorage.setItem(`${counts}`, `${input.value}`);
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
    refreshTodo();
}

function sortTodo(){
    todos.sort();
    refreshTodo();
}

sortBtn.addEventListener('click', sortTodo);    

document.addEventListener('keyup', logKey);

function logKey(e) {
  if (e.key === "Enter"){
    addTodo();
  }
}

