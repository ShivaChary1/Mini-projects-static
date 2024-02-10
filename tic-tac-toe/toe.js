let boxes=document.querySelectorAll(".gamebox");
let reset=document.querySelector("#reset");
let player=true;
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
reset.addEventListener("click",()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
        document.querySelector("#win").innerText=""
    }
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(pos1val)=>{
    document.querySelector("#win").innerText= `Congratulations! ${pos1val} Won`;
    disableBoxes();
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if (player){
        box.innerText="X";
        player=false;
        }else{
            box.innerText="O";
            player=true;
        }
        box.disabled=true;
        checkwinner();
    })
})
let checkwinner=()=>{
    for (let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!=="" && pos2val!=="" && pos3val!==""){
            if(pos1val===pos2val && pos2val===pos3val){
                showWinner(pos1val);
            }
        }
    }
}