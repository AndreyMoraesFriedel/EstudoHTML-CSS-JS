var msg = document.getElementById("msg");
var imagem = document.getElementById("imagem");
var dataAtual = new Date();
var horaAtual = dataAtual.getHours();

msg.innerHTML = `Agora são ${horaAtual} horas`;

function periodoDoDia() {
    if (horaAtual >= 0 && horaAtual <= 11) {
        Manha();
    } else if (horaAtual >= 12 && horaAtual <= 17) {
        Tarde();
    } else {
        Noite();
    }
}

function Manha(){
    imagem.src = "image/In the morning200.jpg";
    document.body.style.background = "#dfdd80";
}

function Tarde(){
    imagem.src = "image/In the afternoon200.jpg";
    document.body.style.background = "#79a5d8";
}

function Noite(){
    imagem.src = "image/At Night200.jpg";
    document.body.style.background = "#333";
}