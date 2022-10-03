var count:number = 0;
var MatrixSize : number = 5;
let r = 1               // Initialization statement for outer loop
while(r <= MatrixSize)  // Condition
{   
    
    let lineStr: string = ""
    let c = 1               // Initialization statement for inner loop
    while(c <= MatrixSize)  // Condition
    {        
        let product1 = r*c
        lineStr = lineStr + "\t"
        //if(product1 == 12)
        //    break // can't do continue without changes since c won't get incremented
        lineStr = lineStr + (r * c)
        c++ // Update for inner loop
    }
    r++  // Update for outer loop
    console.log(lineStr)
}