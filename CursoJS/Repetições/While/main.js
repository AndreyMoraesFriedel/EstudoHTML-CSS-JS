var fatiasPizza = 10;
comerPizza();

function comerPizza(){
    while(temPizza()){
        console.log(`Fatias da Pizza: ${fatiasPizza}`);
        comerFatia();
    }
}


function temPizza(){
    return fatiasPizza;
}

function comerFatia(){
    if(temPizza() > 0){
        fatiasPizza--;
    }
}



/*var loopWhile = 0;
while(loopWhile<5){
    console.log(`helloWorld`);
    loopWhile++;
}
*/

