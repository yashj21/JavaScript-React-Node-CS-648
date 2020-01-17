function game(){
   var choice = window.prompt("Enter your choice");
   var computerChoice = Math.round(Math.random() * 10) % 3;
if(computerChoice == 0 && choice!="paper"){    
    if(choice == "rock"){
        window.alert("it's a tie");
        return;
    }
    window.alert("you lose against rock");
    return;
}
else if(computerChoice == 1 && choice!="rock"){
    if(choice == "scissor"){
        window.alert("it's a tie");
        return;
    }
    window.alert("you lose against scissor");
    return;
}
else if(computerChoice == 2 && choice!="scissor"){
    if(choice == "paper"){
        window.alert("it's a tie");
        return;
        }
    window.alert("you lose against paper");
    return;
}
else {
    window.alert("you win");
    return;
}
}
breaker = "y"
while(breaker == "y"){
    game();
    breaker = window.prompt("Enter to y/n continue");
}
//0 is rock
//1 is scissor
//2 is paper