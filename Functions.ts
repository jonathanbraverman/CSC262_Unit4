let mynumber : number;
function addup(x : number,y : number): number
{
    let z : number = x + y
    return z
}
mynumber = addup(1,2);

console.log(mynumber)



function greet(name: string, title?:string) {
	if(title == undefined)
		title = ''
	console.log("Hello, " + title + name + "!!"); 
}


greet("Tony Stark")
greet("Tony Stark", "Mr.")

function greet2(name: string, title:string = "The Amazing") {
	console.log("Hello, " + title + name + "!!"); 
}

greet("Peter Parker", "Mr.")
greet("Spider Man")


//let mystring : string;
//mystring = addup(1,2);