var count:number = 0;
const inputArray : number[] = [1,2,3,4,5,6,7,8,9,10,999,11, 12, 13];
let i = 0
while((inputArray[i] != 999) && (i < inputArray.length))
{   
    console.log(inputArray[i])
    i++;
}