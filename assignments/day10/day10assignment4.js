var arr = [1,2,3,4];

console.log(arr.length);

arr[0]++;
console.log(arr);

arr.push(5);
console.log(arr);

var newCopyArr = [];
for(var i = 0 ; i < arr.length; i++)
{
    newCopyArr[i] = arr[i];
}
console.log(newCopyArr);