let dezfatorial = 1

for(index = 1; index <= 10; index +=1){
    dezfatorial = dezfatorial * index;
    console.log(dezfatorial)
} // exercicio 1

let word = 'australopiteco';
let invertedword = ""
for(index = word.length - 1; index >= 0; index -= 1){
    invertedword = invertedword + word[index]
}
console.log(invertedword)
// exercicio 2

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "b"
let menorPalavra = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

for(index = 0; index < array.length; index += 1){
    if (maiorPalavra.length < array[index].length){
        maiorPalavra = array[index]
    }
    if (menorPalavra.length > array[index].length){
        menorPalavra = array[index]
    }
}
console.log(maiorPalavra)
console.log(menorPalavra)
// exercicio 3

let maiorPrimo = 
let repositorio = []

for(index = 0; index <= 50; index += 1){
    if(index % 1 === 0 && index % index === 0 && )
}