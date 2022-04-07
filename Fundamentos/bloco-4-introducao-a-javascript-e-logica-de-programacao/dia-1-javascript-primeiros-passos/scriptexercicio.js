const a = 2
const b = 3
const c = 4
const ta = 60
const tb = 65
const tc = 55
let peca = "bishop"
let nota = 91
let par = false 
let impar = false

console.log(a+b)
console.log (a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

if (a > b){
    console.log(a)
}
else{
    console.log(b)
}
if (a > b && a > c){
    console.log(a)
}
else if (b > a && b > c){
    console.log(b)
}
else{
    console.log(c)
}

if (a > 0){
    console.log("positive")
}
else if (a < 0){
    console.log("negative")
}
else{
    console.log("zero")
}

if (ta + tb + tc == 180 && ta < 180 && tb < 180 && tc < 180){
    console.log(true)
}
else if (ta + tb + tc !== 180 && ta < 180 && tb < 180 && tc < 180){
    console.log(false)
}
else{
    console.log(error)
}

switch (peca){
    case "bishop":
        console.log("diagonals");
        break;
    case "knight":
        console.log("make an l");
        break;
    case "pawn":
        console.log("1 step forward");
        break;
    case "rook":
        console.log("line straight");
        break;
    case "king":
        console.log("1 step any direction");
        break;
    case "queen":
        console.log("moves like any other piece");
        break;
    default:
        console.log("ta jogando dama")
}

if(nota >= 90){
    console.log("A");
}
else if(nota <= 80){
    console.log("B")
}
else if (nota >= 70){
    console.log("C")
}
else if (nota >- 60){
    console.log("D")
}
else if (nota >= 50){
    console.log("E")
}
else if (nota < 50){
    console.log("F")
}

if(a % 2 == 0 || b % 2 == 0 || c % 2 == 0){
    par = true
}
console.log(par)

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0){
    impar = true
}
console.log(impar)

