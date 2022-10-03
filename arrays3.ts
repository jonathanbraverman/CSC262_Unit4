let array5:number[] = new Array(1,2,3,4,5)
console.log("Array 5 contains: " + array5)
let array6:number[] = array5.concat([100,101,102])
console.log("Array 6 contains: " + array6)


function notTooSmall(num : number)
{
    return(num > 99);
}

let array7:number[] = array6.filter(notTooSmall)
console.log("What's left after filtering using notTooSmall: " + array7)


let searchValue : number = 4;
array6[array6.length - 2] = searchValue
console.log("Array 6:" + array6)
console.log("The first " + searchValue + " is at index: " + array6.indexOf(searchValue))
console.log("The last " + searchValue + " is at index: " + array6.lastIndexOf(searchValue))


function ascsort(a,b)
{
    if(a <= b)
        return -1
    else 
        return 1
}
let array6b:number[] = array6.sort(ascsort)
console.log("Sorted array6: " + array6b)

console.log("Sliced 0:5 " + array6b.slice(0,5))

var [x1,x2,x3] = array6b.slice(0,3)
console.log("Destructured slice 0:3 as x1,x2,x3 : " + x1 + " " + x2 + " " + x3 )

console.log("For each item in the array")
var myvalue : any;
for (myvalue in array6b)
{
    console.log(myvalue)
}
