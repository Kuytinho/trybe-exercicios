let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let index = 0; index < groceryList.length; index++){
    console.log(groceryList[index])
}

for(let nomes of names){
    nomes += " Silva"
    console.log(nomes)
}