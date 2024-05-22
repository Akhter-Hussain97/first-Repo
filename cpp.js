let userscore=0;
let compscore=0;
const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('.msg');
const userscorePara=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");
const WinnerGame=(userWin, userchoice, cmpchoice)=>{
   if(userWin){
      userscore++;
      userscorePara.innerText=userscore;
      console.log("you Win");
      msg.innerText=`Your ${userchoice} beats ${cmpchoice}`;
      msg.style.backgoundcolor="green";
   }
   else{
      compscore++;
      comp_score.innerText=compscore;
      console.log("you lose");
      msg.innerText=` Your ${cmpchoice} beats ${userchoice}`;
      msg.style.backgoundcolor="red";
   }
}
const Gencompchoice=()=>{
   const option=["rock","papers","scissors"];
   const Rndmno=Math.floor(Math.random()*3);
   return option[Rndmno];
}
const Draw=()=>{
   console.log("Draw the game");
   msg.innerText="Draw the Game";
}
const playGame=(userchoice)=>{
   console.log("user choice=",userchoice);
   const cmpchoice=Gencompchoice();
   console.log("comp choice=",cmpchoice);
   if(userchoice===cmpchoice){
      Draw();
   }
   else{
      let userWin=true;
   if(userchoice==="rock"){
      userWin=cmpchoice==="paper"?false:true;
   }
   else if(userchoice==="paper"){
      userWin=cmpchoice==="scissors"?false:true;
   }
   else{
      userWin=cmpchoice==="rock"?false:true;
   }
   WinnerGame(userWin,userchoice,cmpchoice);
   }
}
choices.forEach((choice)=>{
     choice.addEventListener('click',()=>{
       const userchoice=choice.getAttribute("id");
       playGame(userchoice);
     })
    });
 