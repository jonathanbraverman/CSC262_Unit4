let array4:number[] = new Array(1,2,3,4,5)
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

// SHIFT
var removed = array4.shift();
console.log("\nShifted out a " + removed)
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

// POP
var removed = array4.pop();
console.log("\nPopped of a " + removed)
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

// UNSHIFT
array4.unshift(1.001);
console.log("\nUnshifted in a " + 1.001)
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

// PUSH
array4.push(100);
console.log("\nPushed on a " + 100)
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

array4.reverse();
console.log("\nReversed it")
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

array4.splice(2, 0, 3.14)
console.log("\nSpliced\\added a value in")
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

array4.splice(3, 2, 2.002, 3.003)
console.log("\nSpliced\\swapped values in")
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}

array4.splice(1, 1)
console.log("\nSpliced\\removed value out")
for(var i = 0; i < array4.length;i++)
{
    console.log(array4[i])
}