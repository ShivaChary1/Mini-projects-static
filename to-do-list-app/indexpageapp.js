let btn = document.querySelector(".entr-btn");
let u = document.querySelector(".username").value;
let p = document.querySelector(".password").value;
btn.addEventListener("click",()=>{
    let u = document.querySelector(".username").value;
    let p = document.querySelector(".password").value;
    if(u!=="" && p!==""){
        localStorage.setItem("customerName",u);
        window.location.href = "main.html";
    }else{
        alert("You cannot enter without a Username or Password")
    }
})