var count = 0;
var MatrixSize = 3;
var r = 1; // Initialization statement for outer loop
while (r <= MatrixSize) // Condition
 {
    var lineStr = "";
    var c = 1; // Initialization statement for inner loop
    while (c <= MatrixSize) // Condition
     {
        var product1 = r * c;
        lineStr = lineStr + "\t";
        //if(product1 == 12)
        //    break // can't do continue without changes since c won't get incremented
        lineStr = lineStr + (r * c);
        c++; // Update for inner loop
    }
    r++; // Update for outer loop
    console.log(lineStr);
}
