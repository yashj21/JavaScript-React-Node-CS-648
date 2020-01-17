/*eslint-env browser*/
function displayMenu(){
    "use strict";
    window.console.log("Welcome to  Inventory Mgmt. App.");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products");
    window.console.log("update - Update an existing product's inventory");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function display(inventory){
    inventory.forEach(element => { //similar to lambda java 
       window.console.log(element); 
    });
} 
function update(inventory){
    var sku = parseInt(window.prompt("Enter a sku number"));
    var stock = parseInt(window.prompt("Enter a stock quantity"));
    var index = inventory.indexOf(sku);
    for(var i =0;i<=inventory.length;i++){
        if(inventory[i][0] == sku){
            inventory[i][2]=stock;
            break;
        }
    }
}

function main(){
var inventory=[[4824,"Shirt",10,15.99],[6343,"Jeans",22,39.99],[3223,"Socks",36,9.99],[2233,"Hat",12,14.99],[9382,"Jacket",5,49.99]];
displayMenu();
while(true){
var command=window.prompt("Enter Command");
if(command !== null){
    if(command== "view"){
        display(inventory);
    }else if(command == "update"){
        update(inventory);
        display(inventory);
    }else if(command== "exit"){
        break;   
    }else {
        window.alert("Invalid command!!!");
    }
}
} 
}
main(); 