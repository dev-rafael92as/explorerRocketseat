// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!");
// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const one = 1
const two = 2

const sum = one + two

alert(sum)
// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número". Para saber o tipo de dado você pode usar o operador `typeof`
const number = 10

if (typeof number == 'number') {
  alert('É um número')
} else {
  alert('Não é um número')
}    

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const string = 'É uma string'

if (typeof string == 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const boolean = true

if (typeof boolean == 'boolean') {
  alert('É um booleano')
} else {
  alert('Não é um booleano')
}


// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = one - two

alert(sub)
// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const mult = one * two

alert(mult)
// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = one / two

alert(div)
// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const exmpNumber = 4

if (exmpNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}
// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const otherNumber = 5

if (otherNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}