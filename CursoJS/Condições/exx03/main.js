function verificar(){
    var txtv = document.getElementById('txtVel');
    var res = document.querySelector('div#res');
    var numVel = Number(txtv.value);
    res.innerHTML = `<p>A velocidade do seu Carro é de <strong>${numVel}Km/h</strong></p>`
    if(numVel>60){
        res.innerHTML += "<p>Acima do Limite da Via, <strong>MULTADO!!</strong></p>"
    }else{
        res.innerHTML += `Dentro do Limite da Via, <strong>Boa Viagem!</strong>`
    }    
}

