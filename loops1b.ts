var num:number = 0
var count:number = 0;

for(num=0; num < 20;num++) 
{
    count++
    if (num % 2 == 0) 
    {
        continue
    }
    console.log(num)
}

console.log("The loop executed " + count + " times")

