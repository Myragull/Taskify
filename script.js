let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");

function addTask(){
let uservalue=userInput.value;
console.log(uservalue);
}

addBtn.addEventListener("click", addTask);