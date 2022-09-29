var count:number = 0;

for(let r = 1;r <= 10;r++) 
{   
    let lineStr: string = ""
    for(let c = 1; c <= 10; c++)
    {
        let product1 = r*c
        lineStr = lineStr + "\t"
        //if(product1 == 20)
        //    //continue  // break
        lineStr = lineStr + (r * c)
    }
    console.log(lineStr)
}