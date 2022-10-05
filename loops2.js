var lineStr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
console.log(lineStr);
for (var c = 0; c < 10; c++) {
    if (lineStr[c] == 'e')
        continue;
    var mychar = lineStr[c];
    lineStr[c] = c.toString(); // mychar.toUpperCase()
}
console.log(lineStr);
