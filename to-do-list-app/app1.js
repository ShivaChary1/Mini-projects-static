let logoutBtn = document.querySelector("#logout-btn");
let userMsg = document.querySelector(".userMsg")
let message = "Welcome " + localStorage.getItem("customerName") + ". You can now add your Tasks!!"
userMsg.innerText = message
logoutBtn.addEventListener("click",()=>{
    window.location.href = "Todo.html";
})
let task = document.querySelector(".etr-task")
let addBtn = document.querySelector(".add-task")
addBtn.addEventListener("click",()=>{
    let div = document.createElement("div")
    let delBtn = document.createElement("button")
    let taskManager = document.querySelector(".addedtsk")
    let taskValue = task.value;
    if(taskValue===""){
        alert("Task cannot be empty!")
    }else{
        delBtn.innerText = "X";
        div.innerText = taskValue;
        div.classList.add("Ntasks")
        delBtn.classList.add("delbtn")
        div.append(delBtn)
        taskManager.append(div)
        task.value = ""
    }
    delBtn.addEventListener("click",()=>{
        div.remove(taskManager)
    })
})
task.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        event.preventDefault();
        addBtn.click();
    }  
})
