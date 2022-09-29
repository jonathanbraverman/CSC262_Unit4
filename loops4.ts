var count:number = 0;
var MatrixSize : number = 5;
for(let r = 1;r <= MatrixSize;r++) 
{   
    let lineStr: string = ""
    for(let c = 1; c <= MatrixSize; c++)
    {
        let product1 = r*c
        lineStr = lineStr + "\t"
        //if(product1 == 12)
        //    c = MatrixSize //MatrixSize = 8
        lineStr = lineStr + (r * c)
    }
    console.log(lineStr)
}