console.log("*** Ques1 ***");
var cnt = 10;
var num = 1;
while( cnt > 0 )
{
    console.log(num);
    num = num*2;
    cnt--;
}

console.log( "*** Ques2 ***");
num = 1;
for( var i = 1 ; i <= 10 ; i++)
{
    console.log(num);
    num = num*2;
}

console.log("*** Ques3 ***")
for(var i = 1 ; i <= 5 ; i++)
{
    var str = "";
    for(var j = 1 ; j <= i ; j++ )
    {
        str += j + " "; 
    }
    console.log(str);
}

console.log("*** Ques4 ***")
var num = 1;
for(var i = 1 ; i <= 5 ; i++)
{
    var str = "";
    for(var j = 1 ; j <= i ; j++ )
    {
        str += num + " "; 
        num++;
    }
    console.log(str);
}
