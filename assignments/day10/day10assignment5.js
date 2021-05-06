console.log("*** Ques1 ***");
function square(x)
{
    return x*x;
}
console.log(square(3));

console.log("*** Ques2 ***");
function logDate(){
    var hour = (new Date()).getHours();

    if( hour >= 5 && hour < 12)
    {
        console.log("Good Morning");
    }

    else if( hour >= 12 && hour < 16)
    {
        console.log("Good Afternoon");
    }

    if( hour >= 16 && hour < 20)
    {
        console.log("Good Evening");
    }
    else{
        console.log("Good Night");
    }
}
logDate();

console.log("*** Ques3 ***");
function sumArray(x){
    var res = 0;
    for(var i= 0 ; i < x.length; i++)
    {
        res += x[i];
    }
    return res;
}
var result =sumArray( [ 1, 2, 3, 4 ] );
console.log(result );

console.log("*** Ques4 ***");
function sumSquares(x)
{
    var newArr = [];
    for(var i = 0 ; i < x.length; i++)
    {
        newArr.push(x[i]*x[i]);
    }
    var res = sumArray(newArr);
    return res;
}
var result = sumSquares( [ 1, 2, 3, 4 ] );
console.log( result );

console.log("*** Ques5 ***");
function contains(arr , tofind)
{
    for(var i = 0 ; i < arr.length ; i++ )
    {
        if(arr[i] == tofind) return true;
    }
    return false;
}
console.log(contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
console.log(contains( [ 1, 2, 3, 4 ], 5 ) );