let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");
let displayTask=document.querySelector(".task_display-container");
let userArray= JSON.parse(localStorage.getItem("userData")) || [];

// function to create items dynamically
function createItemsDynamically(value){
    // create a container to put the todo in
  const todoEntry= document.createElement('div');
  todoEntry.className = "todo";
    // created paragraph element inside displayTask
  const para=document.createElement('p');
  para.className = 'display-added-task';
  para.textContent=value;
  todoEntry.appendChild(para);
  // created delete button
  const deleteBtn= document.createElement('Button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent= "Delete";
  todoEntry.appendChild(deleteBtn);
  displayTask.appendChild(todoEntry);
  deleteBtn.addEventListener('click',function(){
    deleteItem(para,deleteBtn);
  });
  }

  // function to get data
  function getData(){
    arrayList = JSON.parse(localStorage.getItem("userData")) || [];
    console.log(arrayList);
    arrayList.forEach(element => {
      createItemsDynamically(element);
    });
  }
  
  getData();

// function to add data
function addTask(){
  let uservalue=userInput.value;
if (uservalue.length>0) {
 // adding uservalue to array
 uservalue.trim();
 let addedValueToArray=userArray.push(uservalue);
 // console.log(userArray);
 // add data to local storage
   localStorage.setItem("userData", JSON.stringify(userArray));
  createItemsDynamically(uservalue);
}
  userInput.value="";
}

// function for the deletebtn
  function deleteItem(para,deletebtn){
    para.remove();
    deletebtn.remove();
    localStorage.removeItem(userArray);
  }


addBtn.addEventListener("click", addTask);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

