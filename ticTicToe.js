let boxes=document.querySelectorAll("#box");
let resetBtn=document.querySelector(".restBtn");
let newGameBtn=document.querySelector(".new-Game");
let msgContainer=document.querySelector(".msg");
let msg=document.querySelector(".Winner");
let mode=document.querySelector(".mode");
let body=document.querySelector("body");
let currentMode="dark";

let turnO=true;
const winPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
   
];

const resetGame=()=>{
    turnO=true;
    msgContainer.classList.add("hide");
    enableBtn();

};

const disableBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

let count =0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
      if(turnO){
        box.innerText="O";
        turnO=false;
      }else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;
      count++;
      if(count===9){
        draw();
      }
      checkWinner();
      
    });
});

const showWinner = (winner) =>{
    msgContainer.classList.remove("hide");
    msg.innerText=`congratution winner is ${winner}`;
    disableBtn();

    
};
const draw=()=>{
    msgContainer.classList.remove("hide");
    msg.innerText="Match is draw click on new game ";
    disableBtn();
};


const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;


        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
};

resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",resetGame);

const darkMode=()=>{
    if(currentMode==="light"){
        body.style.backgroundColor="#01110A";
        mode.style.backgroundColor="#01110A";
        resetBtn.style.backgroundColor="#01110A";
        newGameBtn.style.backgroundColor="#01110A";
        currentMode="dark";
    }
    else{
        body.style.backgroundColor="#caf0f8";
        mode.style.backgroundColor="#caf0f8";
        resetBtn.style.backgroundColor="#caf0f8";
        newGameBtn.style.backgroundColor="#caf0f8";
        currentMode="light";
        
    }
}
mode.addEventListener("click",darkMode);


