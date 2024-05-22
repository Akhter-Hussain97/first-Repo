let boxes=document.querySelectorAll('.box')
let newg=document.querySelector(".new");
let resetg=document.querySelector(".reset");
let msgcont=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
const Showwinner=(winner)=>{
    msg.innerText=`Congratulation Winner are ${winner}` ;
    msgcont.classList.remove("hide");
    disableBox();
}
const resetGame=()=>{
    turnO=true;
    enableBox();
    msgcont.classList.add("hide");
};
let turnO=true;//player1,player2
const winnerp=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        WinnerCheck();
    })
});
const WinnerCheck=()=>{
    for(let pattern of winnerp){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&& pos2Val!=""&& pos3Val!=""){
            if(pos1Val=== pos2Val && pos2Val===pos3Val){
            Showwinner(pos1Val);
            }
        }
    } 
};
newg.addEventListener('click',resetGame);
resetg.addEventListener('click',resetGame);
