let userInput=document.querySelector(".user-input");
let addBtn= document.querySelector(".add-btn");

function addTask(){
let uservalue=userInput.value;
console.log(uservalue);
}

addBtn.addEventListener("click", addTask);
// userInput.addEventListener("keydown",(e)=>{
//     if(e.keycode===13){
//         addTask();
//     }
// });

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });