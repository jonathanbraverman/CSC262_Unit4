console.log("\nBasic Function Example");
var mynumber;
function addup(x, y) {
    var z = x + y;
    return z;
}
mynumber = addup(1, 2);
console.log(mynumber);
console.log("\n\n\n");
console.log("\nOptional Parameter Example");
function greet(name, title) {
    if (title == undefined)
        title = '';
    console.log("Hello, " + title + name + "!!");
}
greet("Tony Stark");
greet("Tony Stark", "Mr.");
console.log("\n\n\n");
console.log("\nDefault Arguments Example");
function greet2(name, title) {
    if (title === void 0) { title = "The Amazing "; }
    console.log("Hello, " + title + name + "!!");
}
greet2("Peter Parker", "Mr.");
greet2("Spider Man");
//let mystring : string;
//mystring = addup(1,2);
