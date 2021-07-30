function computerPlay()
{
    let n=Math.random();
    if(n>=0 && n<=0.33) return "rock";
    else if(n>0.33 && n<=0.66) return "paper";
    else return "scissors";
}
function game(playerSelection,computerSelection)
{
    if(playerSelection.toLowerCase()=="rock")
    {
        if(computerSelection=="paper") return -1;
        else if(computerSelection=="scissors") return 1;
        else return 0;
    }
    else if(playerSelection.toLowerCase()=="paper")
    {
        if(computerSelection=="scissors") return -1;
        else if(computerSelection=="Rock") return 1;
        else return 0;
    }
    else if(playerSelection.toLowerCase()=="scissors")
    {
        if(computerSelection=="rock") return -1;
        else if(computerSelection=="paper") return 1;
        else return 0;
    }
}
        let playerScore=0;
        let computerScore=0;
function play()
{
    for(let i=0;i<5;i++)
    {
        const playerSelection= prompt("Choose your side!");
        const computerSelection=computerPlay();
        const result=game(playerSelection,computerSelection);
        if(result>0) playerScore+=1;
        else if(result<0) computerScore+=1;
    }
    if(playerScore>computerScore) return `You Win! by ${playerScore} to ${computerScore}`;
    else if(playerScore<computerScore) return `You Lose! by ${playerScore} to ${computerScore}`;
    else return "Draw";
}
