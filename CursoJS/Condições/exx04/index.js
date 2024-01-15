var idade = 10;
console.log(`Vocë tem ${idade} anos`);
if(idade>=18 && idade<=70){
    console.log("Vota");
}else if(idade>=16 && idade<18 || idade>70){
    console.log(`Voto Opcional`);
}else{
    console.log(`Não Vota`);
}