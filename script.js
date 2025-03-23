let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");
let displayTask=document.querySelector(".task_display-container");


function addTask(){
let uservalue=userInput.value;
if (uservalue.length>0) {
    // create a container to put the todo in
  const todoEntry= document.createElement('div');
  todoEntry.className = "todo";
    // created paragraph element inside displayTask
  const para=document.createElement('p');
  para.className = 'display-added-task';
  para.textContent=uservalue;
  todoEntry.appendChild(para);
  // created delete button
  const deleteBtn= document.createElement('Button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent= "Delete";
  todoEntry.appendChild(deleteBtn);
  displayTask.appendChild(todoEntry);
  // add data to local storage
  // localStorage.setItem("userData", uservalue);
  // localStorage.setItem("userData", para.value);
   localStorage.setItem("userData", JSON.stringify(para.value));
   
  // function for the deletebtn
  function deleteItem(){
    para.remove();
    deleteBtn.remove();
  }
  deleteBtn.addEventListener('click',deleteItem);
userInput.value="";
}

}


addBtn.addEventListener("click", addTask);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      // event.preventDefault();
      addTask();
    }
  });

