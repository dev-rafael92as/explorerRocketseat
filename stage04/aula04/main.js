let firstNumber = prompt("Insira o primeiro numero");
let secondNumber = prompt("Insira o segundo numero");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber; //Estrutura da soma
const sub = firstNumber - secondNumber; //Estrutura da subtração
const div = (firstNumber > secondNumber ? firstNumber / secondNumber : secondNumber / firstNumber); //Estrutura da divisão
const mult = firstNumber * secondNumber; //Estrutura da multiplicação
const resT = firstNumber % secondNumber; //Estrutura do resto da divisão

alert(`A soma do número é ${sum}. A subtração é ${sub}. A divisão (de numero real é ${div}. A multiplicação é ${mult} e o resto da divisão é ${resT}`)