const getUserInput = document.querySelector("#result-user-stat span");
const getCompInput = document.querySelector("#result-comp-stat span");
const getWinner = document.querySelector("#result-final-stat span");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const userScoreVal = document.getElementById("userScoreVal");
const compScoreVal = document.getElementById("compScoreVal");




/* < Computer choice>.......... */
function computerChoice(){
    let compChoice= ["rock","paper","scissor"];
    let randomNum = Math.floor(Math.random()*3)
    return compChoice[randomNum];
}


/* < winner>.......... */

function winner(c,u){
    let player= u;
    let comp= c;
   
    if(player===comp){
        return getWinner.textContent= "Tie";
    }
    if(player==="rock"){
        if(comp==="paper"){
            return getWinner.textContent="You Lost"
        }
        else{
            return getWinner.textContent="You Win"
        }
    }
    
    if(player==="paper"){
        if(comp==="scissor"){
            return getWinner.textContent="You Lost"
        }
        else{
            return getWinner.textContent="You Win"
        }
    }
    if(player==="scissor"){
        if(comp==="rock"){
            return getWinner.textContent="You Lost"
        }
        else{
            return getWinner.textContent="You Win"
        }
    }

}


let userScore=0;
let compScore=0;
/* < User choice>.......... */
    rock.addEventListener("click",()=>{
       let u = getUserInput.textContent="rock";
       let c =  getCompInput.textContent = computerChoice();
        winner(c,u);
        if(getWinner.textContent==="You Win"){
            userScore++
        }
        else if(getWinner.textContent==="Tie"){
            userScore;
            compScore;
        }

        else{
            compScore++
        }
        userScoreVal.textContent=userScore;
        compScoreVal.textContent=compScore;
    })
    paper.addEventListener("click",()=>{
        let u = getUserInput.textContent="paper";
       let c =  getCompInput.textContent = computerChoice();
        winner(c,u);
        if(getWinner.textContent==="You Win"){
            userScore++
        }
        else if(getWinner.textContent==="Tie"){
            userScore;
            compScore;
        }
        
        else{
            compScore++
        }
        userScoreVal.textContent=userScore;
        compScoreVal.textContent=compScore;
    })
    scissor.addEventListener("click",()=>{
        let u = getUserInput.textContent="scissor";
        let c =  getCompInput.textContent = computerChoice();
         winner(c,u);
         if(getWinner.textContent==="You Win"){
            userScore++
        }
        else if(getWinner.textContent==="Tie"){
            userScore;
            compScore;
        }
        
        else{
            compScore++
        }
        userScoreVal.textContent=userScore;
        compScoreVal.textContent=compScore;
    })


