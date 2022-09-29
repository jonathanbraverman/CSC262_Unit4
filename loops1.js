// requires npm install prompt-sync
//import promptSync from 'prompt-sync'
//const prompt = promptSync(false);
var num = 0;
var count = 0;
//const input = prompt("Give me a number 1 or 2:");
for (num = 0; num < 20; num++) {
    count++;
    if (num % 2 == 0) {
        continue;
    }
    console.log(num);
}
console.log("The loop executed " + count + " times");
