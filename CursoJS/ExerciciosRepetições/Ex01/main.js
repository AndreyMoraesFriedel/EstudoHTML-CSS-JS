var strInicio = document.getElementById('inicio');
var strFim = document.getElementById('fim');
var strPasso = document.getElementById('passo');
var res = document.getElementById('res');

function contarNumeros() {
    var numInicio = Number(strInicio.value);
    var numFim = Number(strFim.value);
    var numPasso = Number(strPasso.value);

    if(strInicio.value.length == 0 || strFim.value.length == 0 || strPasso.value.length == 0){
        window.alert(`[ERROR] Falta de Dados`);
    }
    else{
        res.innerHTML = `Contando: <br>`
        if(numInicio<numFim){
            //Crescente
            for(numInicio;numInicio<=numFim;numInicio+=numPasso){
                if(numInicio!=numFim){
                    res.innerHTML += `${numInicio} &#x1F449;`;
                }else{
                    res.innerHTML += `${numFim} &#x1F3C1;`
                }
                
            }
        }else{
            //Decrescente
            for(numInicio;numInicio>=numFim;numInicio-=numPasso){
                if(numInicio!=numFim){
                    res.innerHTML += `${numInicio} &#x1F449;`;
                }else{
                    res.innerHTML += `${numFim} &#x1F3C1;`
                }
                
            }
        }

    }

    

}
