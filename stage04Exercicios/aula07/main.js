let result = prompt('Advinhe o número que estou pensando? Está entre 0 e 10');
const randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber)
let xAttempts = 1 

while(Number(result) != randomNumber) {
    result = prompt("Errou, tente novamente!")
    xAttempts++
}

alert(`Parabéns, o número que você pensou foi ${result} você acertu em ${xAttempts} tentativas!`)