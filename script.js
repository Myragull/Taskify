let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");
let displayTask=document.querySelector(".task_display-container");
// let displayTaskParent =document.querySelector(".parent-of-task-display");


function addTask(){
let uservalue=userInput.value;
console.log(uservalue);
// created paragraph element inside displayTask
const para=document.createElement('p');
para.className = 'display-added-task';
para.textContent=uservalue;
displayTask.appendChild(para);
// created delete button
const deleteBtn= document.createElement('Button');
deleteBtn.className = 'delete-btn';
deleteBtn.textContent= "Delete";
displayTask.appendChild(deleteBtn);
// displayTaskParent.appendChild(displayTask)!;
}

addBtn.addEventListener("click", addTask);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });