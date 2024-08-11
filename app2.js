let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
const options=["rock","paper","scissors"];
const ranIdx=Math.floor(Math.random()*3);
return options[ranIdx];
};
const drawGame=()=>{
   // console.log("Game was draw");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("You Win!");
    msg.innerText=`You Win! Your  ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText=compScore;
   // console.log("You Loose");
    msg.innerText=`You Loose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}
const playGame=(userChoice)=>{
console.log("user-choice=",userChoice);
const compChoice=genCompChoice();
console.log("Comp choice=",compChoice);
if(userChoice===compChoice){
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}
};
//0-2 chachiye to 3 se multiply
//0-7 chahiye to 8 se multiply
//0-9 chahiye to 10 se multiply 
// Math.random() function ka
// Math.floor gives whole number in result
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
   const userChoice=choice.getAttribute("id");     
   playGame(userChoice);
    });
});

