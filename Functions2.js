//myAdd(3,4);  Cannot do this with an anonymous function
// // solution with ananonymous function
var myAdd = function (n1, n2) {
    console.log(myAdd.caller);
    console.log("Adding 2 numbers");
    console.log(n1 + n2);
    return n1 + n2;
};
var myAdd77 = function FunctionName(n1, n2) {
    console.log(myAdd77.caller);
    console.log("Adding 2 numbers");
    console.log(n1 + n2);
    return n1 + n2;
};
function test() {
    myAdd(3, 4); //caller1(myAdd, 3, 4)
    myAdd77(7, 3);
    caller1(normalmyAdd, 3, 4);
    //normalmyAdd(3,4);
    //const doublerL = value => value * 2;
    var doublerL = function (n1, n2) {
        console.log(doublerL.caller);
        return n1 + n2;
    };
    console.log(doublerL(3, 4));
    caller1(doublerL, 3, 4);
}
function normalmyAdd(n1, n2) {
    console.log(normalmyAdd.caller);
    console.log("Adding 2 numbers");
    console.log(n1 + n2);
    return n1 + n2;
}
function caller1(func, par1, par2) {
    func(par1, par2);
}
(function (n1, n2) {
    console.log("Adding 2 numbers as an IIFE");
    console.log(n1 + n2);
    return n1 + n2;
})(6, 7);
test();
