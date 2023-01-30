//SELECT ELEMENTS AND ASSIGN THEM TO VARS
var newTask = document.querySelector('#new-task');
var addTaskBtn = document.querySelector('#addTask');

var toDoUl = document.querySelector(".todo-list ul");
var completeUl =  document.querySelector(".complete-list ul");
var taskClear = document.querySelector(".btnClear");
var allTasks = document.querySelector(".allTasks");
var h2 = document.querySelector(".h2");
var myList = document.querySelector("#myList");
var taskList = [];


let greet = document.getElementById("greeting");
const date = document.getElementById("date");
let display = document.getElementById("display");
let result = document.getElementById("result");
let enter = document.getElementById("enter");
let divid = document.getElementById("divid");
let submit = document.getElementById("submit");
let user = document.getElementById("user");
let loggy = document.getElementById("log");
let lname = document.getElementById("last");
let email = document.getElementById("email");
let emailL = document.getElementById("emailL");
var taskClear = document.querySelector(".btnClear");

var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
let dateTwo = new Date().toLocaleDateString();
console.log(dateTwo); // 6/17/2022

// /[^\s@]+@[^\s@]+\.[^\s@]+/gi
$("#myDisplayContainer").hide();

submit.addEventListener("click",  printInfo =() =>{

  if (user.value.length > 0 && email.value.length > 0 ) {
    if(email.value.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi)){
      if (user.value.match(/^[a-zA-Z]*$/)) {
        greet.innerHTML = `WELCOME ${user.value.toUpperCase()}` ;
        date.innerText = dateTwo;
        emailL.innerHTML = email.value;
        $("#myDisplayContainer").show();
        $("#login").hide();
      }else{
        alert(`Name must include Letters only`)
      }

    }else{
      alert(`invalid email`)
      email.value = ""
    }
  }else{
    alert(`Fill In Field`)
  }

 })


//CREATE FUNCTIONS
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('filter');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}

//CREATING THE ACTUAL TASK LIST ITEM
var createNewTask = function(task){
  
  //SET UP THE NEW LIST ITEM
  var listItem = document.createElement("li"); //<li>
  listItem.classList.add( "filter" );
  var checkBox = document.createElement("input"); //checkbox
  var label = document.createElement("label"); // <label>
  
  
  //PULL THE INPUTED TEXT INTO LABEL
  label.innerText = task;
  
  //ADD PROPERTIES
  checkBox.type = "checkbox";
  
  //ADD ITEMS TO THE LI
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  //EVERYTHING PUT TOGETHER
  return listItem;  
  
};

//ADD THE NEW TASK INTO ACTUAL INCOMPLETE LIST
var addTask = function(){
  //FOR CLARITY, GRAB THE INPUTTED TEXT AND STORE IT IN A VAR
  var listItem = createNewTask(newTask.value);
  //ADD THE NEW LIST ITEM TO LIST
  toDoUl.appendChild(listItem); 
  taskList.push(newTask.value);
  //CLEAR THE INPUT
  newTask.value="";
  
  //BIND THE NEW LIST ITEM TO THE INCOMPLETE LIST
  bindIncompleteItems(listItem, completeTask);
  localStorage.setItem("mylist", JSON.stringify(taskList));
};

let saved = localStorage.getItem("mylist");
if (saved) {
  taskList = JSON.parse(localStorage.getItem("mylist"));
  // render(taskList);
  console.log(taskList)
  // allTasks.innerHTML = taskList;

} else {
  taskClear.style.display = "none";
  h2.style.display = "none";
}

taskClear.addEventListener("click", function() {
  localStorage.clear();
  toDoUl.innerHTML = "";
  myList.innerHTML="";
  taskList = [];
  taskClear.style.display = "none";
  h2.style.display = "none";
});


var completeTask = function(){
  
  //GRAB THE CHECKBOX'S PARENT ELEMENT, THE LI IT'S IN
  var listItem = this.parentNode;
  
  //CREATE AND INSERT THE DELETE BUTTON
  var deleteBtn = document.createElement("button"); // <button>
  deleteBtn.innerText =""; 
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  
  //SELECT THE CHECKBOX FROM THE COMPLETED CHECKBOX AND REMOVE IT
  var checkBox = listItem.querySelector("input[type=checkbox]");
  checkBox.remove();
  
  //PLACE IT INSIDE THE COMPLETED LIST
  completeUl.appendChild(listItem); 
  
  //BIND THE NEW COMPLETED LIST
  bindCompleteItems(listItem, deleteTask);
  
};

//DELETE TASK FUNCTIONS
var deleteTask = function(){
  
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  
  ul.removeChild(listItem);
  
};

window.addEventListener("load", () =>{
  let level = document.getElementById("myList");
     
  taskList.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    level.appendChild(li);
  })
 

})

console.log(taskList, "2")
console.log(saved, "2")

//A FUNCTION THAT BINDS EACH OF THE ELEMENTS THE INCOMPLETE LIST

var bindIncompleteItems = function(taskItem, checkBoxClick){  
 
  
  //BIND THE CHECKBOX TO A VAR
  var checkBox = taskItem.querySelector("input[type=checkbox]");
  
  //SETUP EVENT LISTENER FOR THE CHECKBOX
  checkBox.onchange = checkBoxClick;  
}; 


//A FUNCTIONM THAT BINDS EACH OF THE ELEMTS IN THE COMPLETE LIST
var bindCompleteItems = function(taskItem, deleteButtonPress){
 
  
  //BIND THE DELETE BUTTON
  var deleteButton = taskItem.querySelector(".delete");
   
  //WHEN THE DELETE BUTTIN IS PRESSED, RUN THE deleteTask function
  deleteButton.onclick = deleteButtonPress;
    
};


for(var i=0; i < toDoUl.children.length; i++) {
  bindIncompleteItems(toDoUl.children[i], completeTask);
}

for(var i=0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}


addTaskBtn.addEventListener("click", addTask);

