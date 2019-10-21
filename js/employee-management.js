/*eslint-env browser*/

var $ = function(id){
    "use strict";
    return document.getElementById(id);
};
var addEmployee = function (){
var header = "";
var msg = "Check your value!!";
var name = $("name").value;
var title = $("title").value;
var xtn = $("xtn").value;
var errorMsg ="Required";
if(name === ""){
$("errorName").innerHTML=errorMsg;
header=msg;
}
if(title === ""){
    $("errorTitle").innerHTML=errorMsg;
header = msg;
}
if(xtn === ""){
$("errorXtn").innerHTML=errorMsg;
header = msg;
}

if( header !== msg){
    $("errorName").innerHTML="";
    $("errorTitle").innerHTML="";
    $("errorXtn").innerHTML="";
    
    employeeList[employeeList.length]=[name,title,xtn];
    displayInitData();    
}
};
var employeeList;
function loadInitData(){
    employeeList=[["HisName1","Title1","12345"],
                ["HerName1","Title2","23456"],
                ["HerName2","Title3","23457"],
                ["HerName3","Title4","23451"],
                ["HerName4","Title5","23452"]];
}

var deleteEmployee =function (e){ 
    var h2= e.currentTarget;
    for(var i = 1; i<employeeList.length;i++){
    if (employeeList[i][2]==h2.id){
        employeeList.splice(i,1);
        break;          
    }
    }
    displayInitData();
}
function displayInitData(){
    var table = $("displayData");

    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    
    for(var i = 1; i<employeeList.length;i++) {
        var tr =table.insertRow();
        
        for(var a = 0; a<3;a++){
            var cell = table.rows[i].insertCell();
            cell.textContent =employeeList[i][a];
        }
       var deletecell = table.rows[i].insertCell(); 
        var button = document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","delete");
        button.setAttribute("id",employeeList[i][2]);
        deletecell.appendChild(button);
    }
    for(var i = 1; i<employeeList.length;i++){
        $(employeeList[i][2]).addEventListener("click",deleteEmployee);
    }
    updateCount();
}
function updateCount(){
    $("employeeCount").innerHTML= employeeList.length-1;
}
  loadInitData();    
window.addEventListener("load", function(){
    displayInitData();
     $("add").addEventListener("click", addEmployee);
  
});