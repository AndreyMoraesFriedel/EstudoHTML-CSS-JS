var strNum = document.getElementById('num');
var tab = document.getElementById('selTab');

function gerarTabuada(){
    if(strNum.value.length == 0){
        window.alert(`[ERROR] Falta de Dados`);
    }else{
        var num = Number(strNum.value);
        tab.innerHTML = ""
        for(i = 1;i<=10;i++){
            var mult = num * i;
            let item = document.createElement('option')
            item.text = `${num} x ${i} = ${mult}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }

}
