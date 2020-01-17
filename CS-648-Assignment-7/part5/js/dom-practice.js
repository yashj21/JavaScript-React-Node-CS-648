/*eslint-env browser*/

//STEP 1

function writeMessage(){
    window.alert("Step 1 : I have been clicked!!!");
}
//STEP 2
var b1 = window.document.getElementById("Button1");
b1.onClick = function(){
    "use strict";
    window.alert("Step 2 : I have been clicked!!!");
};
//STEP 3
var button2 = window.document.getElementById("Button2");
button2.addEventListener("click",writeMessage1);
function writeMessage1(){

    window.alert("Step 3 : I have been clicked!!!");
}
//Step4
var button3 = window.document.getElementById("Button3");
button3.addEventListener("click",function(){
    window.alert("Step 4: I have been clicked!!!");
});
//STEP 5
window.addEventListener("load",function (){
 "use strict"; 
var button3 = window.document.getElementById("Button4");
button4.addEventListener("click",function(){
    window.alert("Step 4: I have been clicked!!!");
});
});
