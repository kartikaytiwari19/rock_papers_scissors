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
        if(computerSelection=="paper") return "You Lose! Paper beats Rock";
        else if(computerSelection=="scissors") return "You Win! Rock beats Scissors";
        else return "Draw";
    }
    else if(playerSelection.toLowerCase()=="paper")
    {
        if(computerSelection=="scissors") return "You Lose! Scissors beats Paper";
        else if(computerSelection=="Rock") return "You Win! Paper beats Rock";
        else return "Draw";
    }
    else if(playerSelection.toLowerCase()=="scissors")
    {
        if(computerSelection=="rock") return "You Lose! Rock beats Scissors";
        else if(computerSelection=="paper") return "You Win! Scissors beats Paper";
        else return "Draw";
    }
}
function play()
{
    const playerSelection="Rock";
    const computerSelection=computerPlay();
    const result=game(playerSelection,computerSelection);
    return result;
}