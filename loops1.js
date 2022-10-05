var num = 0;
var count = 0;
var example = 2;
switch (example) {
    case 1: // For loop variable as control loop variable only
        // Data processed within the loop is a function of inputted or calculated data
        for (num = 0; num < 20; num = num + 1) {
            var square_root = Math.sqrt(count);
            console.log(square_root);
            count = count + 1;
        }
        console.log("The loop executed " + count + " times");
        break;
    case 2: // Changing the input to the loop as data
        for (num = 10; num > 0; num = num - 1) // 
         {
            console.log(num);
            console.log(num * num); // print out the squared value
            count = count + 1; // count++
        }
        console.log("The loop executed " + count + " times");
        break;
}
