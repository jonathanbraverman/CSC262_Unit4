    let lineStr: string[] = ["a","b","c","d","e","f","g","h","i","j"]

    console.log(lineStr)

    for(let c = 0; c < 10; c++)
    {
        //if(lineStr[c] == 'e')
        //    continue  break   
        let mychar : string = lineStr[c]
        lineStr[c] = mychar.toUpperCase()
    }
    
    console.log(lineStr)
