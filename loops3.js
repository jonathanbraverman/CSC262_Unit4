var count = 0;
var MatrixSize = 5;
for (var r = 1; r <= MatrixSize; r++) {
    var lineStr = "";
    for (var c = 1; c <= MatrixSize; c++) {
        var product1 = r * c;
        lineStr = lineStr + "\t";
        if (product1 == 12)
            break; //MatrixSize = 8
        lineStr = lineStr + (r * c);
    }
    console.log(lineStr);
}
