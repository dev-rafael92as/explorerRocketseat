let option
let bDados = []

while(option != 3) {
    
        option = Number(prompt(`
        Digite por favor o número de uma das opções

        1 - Para gravar uma opção no banco de dados
        2 - Verificar o que está gravado no banco de dados
        3 - Sair do programa
        `))

    switch(option) {
        case 1:
            let item = prompt("Por favor, digite o item para gravar!")
            bDados.push(item)
        break;
        case 2: 
            if (bDados.length == 0) {
                alert('O Banco de dados está vazio!')
            } else {
                alert(bDados)
            }
        break;
        case 3: 
            alert('Fim do Programa')
        break;
        default:
            alert("Por favor, digite uma opção válida")
    }
}