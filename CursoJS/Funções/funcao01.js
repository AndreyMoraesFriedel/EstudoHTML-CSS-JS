function verficarParOuImpar(numero_a_ser_verificado){
    return numero_a_ser_verificado%2==0 ? `Par` : `Impar`
}

console.log("O numero informado é %s", verficarParOuImpar(2))