//STEP 1
halfNumRef = function(num){
    //num = Number(num);
    num = num / 2;
    return num;
};
window.console.log( halfNumRef(12));
//STEP 2
squareRef = function (num){
    var num = num * num;
    return num;
};
window.console.log(squareRef(12));
//STEP 3
percentOf = function(num1,num2){
 var x = (num1 / num2) * 100;
 return x;
};
window.console.log(percentOf(2,4));
//STEP 4
findModulus = function(num1,num2){
    var x = num1 % num2;
    return x;
};
window.console.log(findModulus(2,3));
//STEP 5
var choice = window.prompt("Enter list of numbers to find sum for").split(",");
function sum(numbers){
    var sum = 0;
    for(i = 0; i<numbers.length; i++){
        sum= sum + parseInt(numbers[i]);
    }
    return sum
}
window.console.log(sum(choice));