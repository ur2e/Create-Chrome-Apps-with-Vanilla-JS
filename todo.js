const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
 
const TODOS_LS = "toDos";

let toDos = []; // empty array


function deleteToDo(event){
    //console.log(event.target.parentNode);
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li); //여기까지하면 리스트에서는 안 지워짐
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    }); // filter라는 함수 
    //filter는 array를 모두 탐색한 후 True 값인 애들만 return.. 훔훔
    toDos = cleanToDos;
    saveToDos();
}

// 자바스크립트는 local storage에 있는 모든 데이터를
// string으로 저장하려고 
// 따라서, 그래서 우리는 object가 string이 되도록 해야한다.
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}  

function paintToDo(text){
    const li = document.createElement("li"); // empty li
    const delBtn = document.createElement("button"); // create button
    const span = document.createElement("span"); // create span
    const newId = toDos.length + 1;
    delBtn.innerHTML = "❎";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); // button을 li 안에 넣어 
    li.appendChild(span); // span을 li 안에 넣고
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj); // array에 ele추가하려면 push
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        console.log(parsedToDos);
        parsedToDos.forEach(function(toDo){ // 여기 toDo는 for i in range(1.10) 에서 i.. 같은.고련..
            paintToDo(toDo.text);
        });
    }
}
function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();