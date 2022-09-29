var count = 0;
for (var r = 1; r <= 10; r++) {
    var lineStr = "";
    for (var c = 1; c <= 10; c++) {
        var product1 = r * c;
        lineStr = lineStr + "\t";
        //if(product1 == 20)
        //    continue  // break
        lineStr = lineStr + (r * c);
    }
    console.log(lineStr);
}
