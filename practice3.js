/*3. const ob = { max:  9833293293, george: 992324434, orion: 9293243288 };
Write a function that takes a name as input parameter and display corresponding mobile number.
A. Use Switch statement. 
B. Use loops.*/

const object = { max:  9833293293, george: 992324434, orion: 9293243288 };

function ObjectFunction(input){
    switch(input) {
        case "max" :
            console.log(9833293293);
            break;
        case "george" :
            console.log(92324434);
            break;
        case "orion" :
            console.log(9293243288);
            break;
        default:
            console.log("wrong input")
    
    }
}
ObjectFunction('orion');

function LoopFunction(input){
    if(input === 'max'){
        console.log(9833293293);
    } 
    else if (input === 'george'){
        console.log(92324434);
    }
    else if(input === 'orion'){
        console.log(9293243288);
    }
    else{
        console.log("wrong input")
    }
}
LoopFunction('max')