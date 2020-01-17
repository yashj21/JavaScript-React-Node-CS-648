var x;
var y;
x=parseInt(window.prompt("Enter first numer"));
y=parseInt(window.prompt("Enter second numer"));
if(x>y){
    document.write(x + " is the larger no");
}
else if(x<y){
    document.write(y + " is the larger no");    
}
else{
    document.write("both are equal");
}