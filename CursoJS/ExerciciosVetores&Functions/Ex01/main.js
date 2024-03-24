var numeroDigitado = document.getElementById(`numeroUmACem`)
var lista = document.getElementById(`listaDeValores`)
var res = document.getElementById(`res`)
let valores = []

function adicionarValorNaLista(){
    if(isNumero(numeroDigitado.value) && !inLista(numeroDigitado.value, valores)){
        valores.push(Number(numeroDigitado.value))
        let item = document.createElement(`option`)
        item.text = `Valor ${numeroDigitado.value} adicionado.`
        listaDeValores.appendChild(item)
        res.innerHTML = ``
    }else{
        window.alert("Valor invalido ou ja encontrado na lista")
    }
    numeroDigitado.value = ``
    numeroDigitado.focus()
}

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
}

function finalizar(){
    if(valores.length == 0){
        window.alert(`Adicione valores aqui!`)
    }else{
        res.innerHTML = ``
        totalDeValores()
        maiorNumero()
        mediaDosValores()
    }  
}

function totalDeValores(){
    let tot = valores.length
    res.innerHTML += `<p>Ao todo, temos ${tot} tantos numeros adicionados</p>`   
}

function maiorNumero(){
    let maior = valores[0]
    let menor = valores[0]
    for(let pos in valores){
        if(valores[pos] > maior){
            maior = valores[pos]
        }
        if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
}

function mediaDosValores(){
    let soma = 0
    let media = 0
    let tot = valores.length
    for(let pos of valores){
        soma += pos
    }
    media = soma / tot
    res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
    res.innerHTML += `<p>A media dos valores é de ${media.toFixed(2)}</p>`
}