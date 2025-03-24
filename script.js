let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");
let displayTask=document.querySelector(".task_display-container");
let userArray= JSON.parse(localStorage.getItem("userData")) || [];

// function to create items dynamically
function createItemsDynamically(task){
    // create a container to put the todo in
  const todoEntry= document.createElement('div');
  todoEntry.className = "todo";
  // * store the ID in element
  todoEntry.setAttribute("data-ID",task.id);
    // created paragraph element inside displayTask
  const para=document.createElement('p');
  para.className = 'display-added-task';
  para.textContent=task.value;
  todoEntry.appendChild(para);
  // created delete button
  const deleteBtn= document.createElement('Button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent= "Delete";
  todoEntry.appendChild(deleteBtn);
  displayTask.appendChild(todoEntry);
  deleteBtn.addEventListener('click',function(){
    deleteItem(todoEntry,task.id);
  });
  }

  // function to get data
  function getData(){
    displayTask.innerHTML = "";
    userArray = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(userArray);
    userArray.forEach(task => {
      createItemsDynamically(task);
    });
  }
  
  getData();

// function to add data
function addTask(){
  let uservalue=userInput.value.trim();
if (uservalue.length>0) {
  // *create an object to assign ids to each value
  let task = {
    id: Date.now(),
    value : uservalue
  }
 // adding uservalue to array
 userArray.push(task);
 // console.log(userArray);
 // add data to local storage
   localStorage.setItem("userData", JSON.stringify(userArray));
  createItemsDynamically(task);
}
  userInput.value="";
}

// function for the deletebtn
function deleteItem(todoEntry,value){
  todoEntry.remove();
  // * change the filter condition to match the unique ids
   userArray= userArray.filter(task=>task.id!==value);
   localStorage.setItem("userData",JSON.stringify(userArray));
}

addBtn.addEventListener("click", addTask);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

