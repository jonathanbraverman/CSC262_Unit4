const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
 console.log(s.toUpperCase());
});

funcvar = (function (s) {
    console.log(s);
});

function something(func, strng) {
    func(strng);

}

something(funcvar, names[0]);