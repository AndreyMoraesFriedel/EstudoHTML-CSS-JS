var agora = new Date();
var hora = agora.getHours();
console.log(`Agora são extamente ${hora} horas.`)
if(hora>=0 && hora<=11){
    console.log(`Bom dia!`);
}else if(hora>=12 && hora<=17){
    console.log(`Boa tarde!`);
}else{
    console.log(`Boa Noite!`)
}