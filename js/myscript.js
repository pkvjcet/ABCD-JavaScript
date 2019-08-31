function readValues(){
    var username=document.getElementById('username').value;
    var pwd=document.getElementById('pwd').value;
    console.log(username);
    console.log(pwd);
}
function add(){
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var sum=num1+num2;
    console.log("sum is");
    console.log(sum);
    document.getElementById("result").innerHTML=sum;
    
}