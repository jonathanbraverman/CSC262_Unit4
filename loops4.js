var count = 0;
var MatrixSize = 5;
var r = 1;
while (r <= MatrixSize) {
    var lineStr = "";
    var c = 1;
    while (c <= MatrixSize) {
        var product1 = r * c;
        lineStr = lineStr + "\t";
        if (product1 == 12)
            break;
        lineStr = lineStr + (r * c);
        c++;
    }
    r++;
    console.log(lineStr);
}
