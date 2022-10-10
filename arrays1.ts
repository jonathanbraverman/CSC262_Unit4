let array1 : number[] = [1,2,3,4,5]

for(var i = 0; i < 5;i++)
{
    console.log(array1[i])
}

let array2:number[] = new Array(5)  // Declaring an empty array with 5 elements

for(var i = 0; i < 5;i++)
{
    array2[i] = i                   // Assign values 0 to 4 to elements 1 to 5
    console.log(array2[i])
}

let array3:number[] = new Array(1,2,3,4,5)
for(var i = 0; i < 5;i++)
{
    console.log(array3[i])
}