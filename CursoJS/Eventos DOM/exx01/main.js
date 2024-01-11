var area = document.getElementById('area');
area.addEventListener('click', clickar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

function clickar(){
    area.innerHTML = "Hello World";
    area.style.background = "violet";
}

function entrar(){
    area.innerHTML = "entrou na div";
}

function sair(){
    area.innerHTML = "Saiu Div";
    area.style.background = "black";
}