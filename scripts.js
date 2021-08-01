function computerPlay()
{
    let n=Math.random();
    if(n>=0 && n<=0.33) return "rock";
    else if(n>0.33 && n<=0.66) return "paper";
    else return "scissors";
}
const res=document.createElement('div');
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
        let playerSelection;
function play(playerSelection)
{
        const computerSelection=computerPlay();
        const result=game(playerSelection,computerSelection);
        if(result>0) playerScore++;
        else if(result<0) computerScore++;
        if(playerScore==5) {res.textContent=`Player wins by ${playerScore} to ${computerScore}`;return;};
        if(computerScore==5) {res.textContent=`Computer wins by ${playerScore} to ${computerScore}`;return;};
        res.textContent=`Player: ${playerScore} Computer: ${computerScore}`;
}
const container=document.querySelector('#container');

const b1=document.createElement('button');
const b2=document.createElement('button');
const b3=document.createElement('button');

b1.innerHTML="Scissors";
b2.innerHTML="Rock";
b3.innerHTML="Paper";


document.body.appendChild(b1);
document.body.appendChild(b2);
document.body.appendChild(b3);


b1.addEventListener("click",() => play('scissors'));
b2.addEventListener("click",() => play('rock'));
b3.addEventListener("click",() => play('paper'));

res.textContent=`Player: ${playerScore} Computer: ${computerScore}`;
document.body.appendChild(res);
