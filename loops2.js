var lineStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(lineStr);
for (var c = 0; c < 10; c++) {
    //if(lineStr[c] == 'e')
    //    continue  break   
    var mychar = lineStr[c];
    lineStr[c] = mychar.toUpperCase();
}
console.log(lineStr);
