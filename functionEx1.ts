// function that takes 2 numbers and returns their sum

// solution with a function returning void
function add( n1:number, n2: number ){
    let sum = n1 + n2
    console.log( "the sum is " + sum )
}

// solution with a function returning a number
function add2( n1:number, n2: number ):number{
    let sum = n1 + n2
    return sum
}

// // solution with ana nonymous function
let add3 = function( n1:number, n2:number ){
    console.log( "Adding 2 numbers" )
    console.log( n1+n2 )

    //return n1+n2
}

add( 20, 22 )

let sum = add2( 20, 22)
console.log( sum )
// or
console.log( add2( 20, 22) )

//console.log( add3( 20, 22) )
add3( 20, 22)

// using lambda
var add4 = (n1:number, n2:number)=>n1+n2 
console.log( "Adding 2 numbers with a lambda function: " + add4(10,32) ) 

 