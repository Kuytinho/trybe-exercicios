let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0
let impares = 0
let menor = 1000
let vintecinco = []

console.log(numbers)
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9])
console.log((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]) / 10)

if(console.log((numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9]) / 10) > 20){
    console.log("valor maior que 20")
}
else {
    console.log("valor menor ou igual a 20")
}
for(let index = 0; index < numbers.length; index += 1){
    if(maior < numbers[index]){
        maior = numbers[index]
    }
}
console.log(maior)

for(let index = 0; index < numbers.length; index += 1){
    if(numbers[index] % 2 !== 0){
        impares += 1
    }
}
if(impares === 0){
    console.log("nenhum valor impar encontrado")
}
console.log(impares)

for(let index = 0; index < numbers.length; index += 1){
    if(menor > numbers[index]){
        menor = numbers[index]
    }
}
console.log(menor)

for(index = 1; index <= 25; index += 1){
    vintecinco.push(index)
}
console.log(vintecinco)

for(index = 0; index <= 25; index += 1){
    vintecinco.push(index)
    console.log(vintecinco[index] / 2)
}