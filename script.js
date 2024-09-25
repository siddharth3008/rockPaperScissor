let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".image");
const msgp=document.querySelector("#msg");

const userscoreP= document.querySelector("#user-score");
const compscoreP= document.querySelector("#comp-score");

const genRandomChoice =()=>{
    const option=["Rock","Paper","Scissors"];
    const randomIdx= Math.floor(Math.random()*3);
    return option[randomIdx];
};

const drawGame=()=>{
    // console.log("Game was draw");
    msgp.innerText="GAME WAS DRAW. PLAY AGAIN!"
    msgp.style.backgroundColor="#3572EF";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userscoreP.innerText=userScore;
        console.log("YOU WIN");
        msgp.innerText=`YOU WIN ! Your ${userChoice} Beats ${compChoice}`;
        msgp.style.backgroundColor="green";
    }
    else{
        compScore++;
        console.log("YOU LOSE");
        compscoreP.innerText=compScore;
        msgp.innerText=`YOU LOSE ${compChoice} Beats your ${userChoice}`;
        msgp.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("User Choice=",userChoice)
    //generate computer choices
    const compChoice=genRandomChoice();
    console.log("Computer Choice=",compChoice);
    
    if(userChoice===compChoice){
        //draw game
        drawGame();
        
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
        
          //scissors, paper
          userWin = compChoice == "Paper" ? false:true;
        } 
        else if (userChoice === "Paper") {
          //rock, scissors
          userWin = compChoice == "Scissors" ?false:true;
        } else {
          //rock, paper
          userWin = compChoice == "Rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((image)=>
{
    // console.log(image);
    image.addEventListener("click",()=>{
        const userChoice=image.getAttribute("id");
        
        playGame(userChoice);
    });
});
