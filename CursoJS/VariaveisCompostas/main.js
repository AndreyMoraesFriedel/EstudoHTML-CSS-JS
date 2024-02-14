let numbersArray = [ 5, 8, 4, 3, 9]

numbersArray.push(1)
numbersArray.sort()

console.log(`O vetor tem ${numbersArray.length} posições`)
console.log(`Os valores ordenados são:`)

for(let i in numbersArray){
   console.log(numbersArray[i]);
}

var numberTwo = numbersArray.indexOf(2)
console.log(`O numero 2 %s`, numberTwo!=-1?`esta na ${numberTwo} posição no Array`:`não está no Array`)