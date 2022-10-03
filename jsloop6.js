// requires npm install prompt-sync and
//          npm i --save-dev @types/prompt-sync
const prompt = require('prompt-sync')();


do
{
    var value = prompt("Please enter a positive number or 0 to stop: ");
    var intvalue = Number(value);
    console.log(intvalue * intvalue)
}
while(intvalue > 0);

