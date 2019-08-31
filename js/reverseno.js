var x=536;
var rev=0;
var y=0;
while(x>0){
    y=x%10;
    rev=rev*10+y;
    x=parseInt(x/10);
   
}
console.log(rev)