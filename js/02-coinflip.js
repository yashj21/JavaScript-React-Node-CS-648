var coinFlip;
coinFlip=Math.round(Math.random());
var choice = window.prompt("enter heads or tails");
if(!coinFlip && choice === "heads"){
    window.alert("The flip was heads and you chose heads...you win!");
}
else if(!coinFlip && choice === "tails"){
    window.alert("The flip was heads but you chose tails...you lose!");
}
else if(coinFlip && choice === "heads"){
    window.alert("The flip was tails but you chose heads...you lose!");
}
else {
    window.alert("The flip was tails and you chose tails...you win!");
}
