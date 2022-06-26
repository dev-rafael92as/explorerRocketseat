// Calcular o IMC

pacientes = [
    {
        name: "Rafa",
        age: 29,
        weight: 61,
        height: 170
    },
    {
        name: "Mari",
        age: 26,
        weight: 80,
        height: 163,
    }
]

function IMC(weight, height) {
    return (weight / ((height /100 )** 2)).toFixed(2)
}

function printPatientIMC(paciente) {
    return `
        Paciente ${paciente.name} possui IMC de 
        ${IMC(paciente.weight, paciente.height)}
    `
}

for (const paciente of pacientes) {
    let IMCMessage = printPatientIMC(paciente)
    alert(IMCMessage)
}