

let pacientes = [
    {
        name: 'Luiz',
        age: 20,
        weight: 80,
        height: 180,
    },
    {
        name: 'Mateus',
        age: 25,
        weight: 85,
        height: 170,
    },
    {
        name: 'Larissa',
        age: 17,
        weight: 60,
        height: 160,
    }
]

let pacientesLista = []

for (const paciente of pacientes) {
    pacientesLista.push(`Nome paciente ${paciente.name}, de ${paciente.age} anos, peso ${paciente.weight}kg e altura ${paciente.height}`)
}

alert(pacientesLista)