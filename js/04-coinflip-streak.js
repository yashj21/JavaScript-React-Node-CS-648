var coinFlip;
do {
coinFlip = Math.round(Math.random());
if(!coinFlip){
    window.console.log("Heads \n");
}else if(coinFlip){
    window.console.log("Tails \n");
}
}while(!coinFlip)