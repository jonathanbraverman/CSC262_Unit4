var mynumber;
function addup(x, y) {
    var z = x + y;
    return z;
}
mynumber = addup(1, 2);
console.log(mynumber);
function greet(name, title) {
    if (title == undefined)
        title = '';
    console.log("Hello, " + title + name + "!!");
}
greet("Tony Stark");
greet("Tony Stark", "Mr.");
function greet2(name, title) {
    if (title === void 0) { title = "The Amazing"; }
    console.log("Hello, " + title + name + "!!");
}
greet("Peter Parker", "Mr.");
greet("Spider Man");
// // solution with ananonymous function
var myAdd = function (n1, n2) {
    console.log("Adding 2 numbers");
    console.log(n1 + n2);
    return n1 + n2;
};
//let mynumber = function (x : number, y : number) : number
var myAdd2 = function (x, y) {
    return x + y;
};
