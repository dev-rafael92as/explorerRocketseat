let num1 = Number(prompt("Por favor, insira o primeiro número"))
let num2 = Number(prompt("Por favor, insira o segundo número"))

let sum = num1 + num2

alert(`A soma dos dois números é: ${sum}`)

let sub = num1 - num2

alert(`A subtração dos dois números é: ${sub}`)

let mult = num1 * num2

alert(`A multiplicação dos dois números é: ${mult}`)

var div = num1 / num2

alert(`A divisão dos dois números é: ${div}`)

let rest = num1 % num2

alert(`O resto da divisão dos dois números é: ${rest}`)

switch (sum % 2) {
    case 0:
        alert(`A soma dos dois números é par`)
        break
    default:
        alert(`A soma dos dois números é impar`)
        break
}


if(div == 1 ) {
    alert(`Os dois números são iguais`)
} else {
    alert(`Os dois números são diferentes`)
}