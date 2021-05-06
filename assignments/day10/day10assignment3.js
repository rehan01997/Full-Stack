console.log("*** Ques1 ***")
var arr = [1,2,3,4]
var sumR = 0;
for( var i = 0 ; i < arr.length ; i++ )
{
    sumR += arr[i];
}
console.log(sumR);

console.log("*** Ques2 ***")
sumR = 0;
for(var i = 0 ; i < arr.length ; i++ )
{
    sumR += (arr[i]*arr[i]);
}
console.log(sumR);

console.log("*** Ques3 ***")
var newArr = [];
for(var i = 0 ; i < arr.length ; i++ )
{
    newArr[i] = (arr[i]*arr[i]);
}
console.log(newArr);