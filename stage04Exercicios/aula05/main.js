let name = prompt("Por favor, preencha com o nome");
let nota1 = prompt("Agora escreva a nota da primeira prova do bimestre: (Apenas números)");
let nota2 = prompt("Agora escreva a nota da segunda prova do bimestre: (Apenas números)");
let nota3 = prompt("Agora escreva a nota da terceira prova do bimestre: (Apenas números)");

nota1 = Number(nota1);
nota2 = Number(nota2);
nota3 = Number(nota3);
result = ( nota1 + nota2 + nota3 ) / 3

if(result >= 6 ) {
    alert("Parabéns " + name + " você foi aprovado, com nota " + result)
} else {
    alert("Não desanime " + name + " estude mais para a prova de recuperação, sua nota foi " + result)
}