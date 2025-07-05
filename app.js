let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
let msgPara=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice = () => {
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor((Math.random()*3));
    return options[randIdx];
}

const drawGame = () => {
    msgPara.innerText="Game was draw. Play again!"
    msgPara.style.backgroundColor="#3f3674";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msgPara.innerText=`You win. Your ${userChoice} beats ${compChoice}`;
        msgPara.style.backgroundColor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msgPara.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msgPara.style.backgroundColor="red"
    }
}

const playGame = (userChoice) => {
    const compChoice=genCompChoice();

    if(userChoice === compChoice)
        //Draw Game
        drawGame();

    else
    {
        let userWin=true;
        if(userChoice === "rock")
        {
            //paper,scissors
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper")
        {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true; 
        }
        else
        {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;  
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
