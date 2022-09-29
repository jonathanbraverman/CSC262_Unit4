let mynumber : number;
function addup(x : number,y : number): number
{
    let z : number = x + y
    return z
}


mynumber = addup(1,2);

console.log(mynumber)




// mynumber = function (x : number, y : number) : number
let myAdd: (x: number, y: number) => number = function (
    x: number,
    y: number
  ): number {
    return x + y;
  };