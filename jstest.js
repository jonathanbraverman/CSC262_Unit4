// requires npm install prompt-sync and
//          npm i --save-dev @types/prompt-sync
const prompt = require('prompt-sync')();
var name = prompt('What is your name? ');

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

const factorial = (n9) => 
{
    if(n9 <= 0)
        return 1;
    else
        return(n9 * factorial(n9 - 1));
}    

 console.log(factorial(6));      // outputs 720 

 