var anoNascimento = document.getElementById('txtAnoNasc');
var anoAtual = new Date().getUTCFullYear();

var res = document.getElementById("res");
var sexo = document.getElementsByName('radSex');

var img = document.createElement('img'); //Criacao de imagem dinamica
img.setAttribute('id','foto');  //definindo id da imagem

function verificarIdade(){
    var idade = anoAtual - Number(anoNascimento.value);

    if(idade>= 0 && idade<4){
        bebe();
    }else if(idade>=4 && idade<18){
        jovem();
    }else if(idade>=18 && idade<=60){
        adulto();
    }else{
        idoso();
    }
    
}

function bebe(){
    if (sexo[0].checked) { //Masculino
        mostrarImagem('image/foto-bebe-m.jpg')
    } else if (sexo[1].checked) { //Femino
        mostrarImagem('image/foto-bebe-f.jpg')
    }
}

function jovem(){
    if (sexo[0].checked) {
        mostrarImagem('image/foto-jovem-m.jpg')
    } else if (sexo[1].checked) {
        mostrarImagem('image/foto-jovem-f.jpg')
    }
}

function adulto(){
    if (sexo[0].checked) {
        mostrarImagem('image/foto-adulto-m.jpg')
    } else if (sexo[1].checked) {
        mostrarImagem('image/foto-adulto-f.jpg')
    }
}

function idoso(){
    if (sexo[0].checked) {
        mostrarImagem('image/foto-idoso-m.jpg')
    } else if (sexo[1].checked) {
        mostrarImagem('image/foto-idoso-f.jpg')
    }
}

function mostrarImagem(caminho){
    img.setAttribute('src', caminho)
    res.appendChild(img);
}