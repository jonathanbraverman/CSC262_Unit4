console.log("\nBasic Function Example")

let mynumber : number;
function addup(x : number, y : number): number
{
    let z : number = x + y
    return z
}
mynumber = addup(1,2);

console.log(mynumber)

console.log("\n\n\n")
console.log("\nOptional Parameter Example")

function greet(name: string, title?:string) {
	if(title == undefined)
		title = ''
	console.log("Hello, " + title + name + "!!"); 
}

greet("Tony Stark")
greet("Tony Stark", "Mr.")

console.log("\n\n\n")
console.log("\nDefault Arguments Example")
function greet2(name: string, title:string = "The Amazing ") {
	console.log("Hello, " + title + name + "!!"); 
}

greet2("Peter Parker", "Mr.")
greet2("Spider Man")


//let mystring : string;
//mystring = addup(1,2);