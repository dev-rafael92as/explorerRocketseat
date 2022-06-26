let studentsList = [
    {
        name: "Luiza",
        av1: 7,
        av2: 4
    },
    {
        name: "Marcos",
        av1: 8,
        av2: 4
    },
    {
        name: "Mari",
        av1: 10,
        av2: 6
    },
    {
        name: "Laura",
        av1: 3,
        av2: 4
    },
    {
        name: "Luiz",
        av1: 10,
        av2: 9
    },
    {
        name: "Ricardo",
        av1: 9,
        av2: 9
    }
]

for (const students of studentsList) {
    let media = (students.av1 + students.av2) / 2

    if (media >= 7) {
        alert(`
        Parabéns ${students.name}, sua média foi ${media}
        Você passou de ano, ja está de férias xD
        `)
    } else {
        alert(`
        Que pena ${students.name}, sua média foi ${media}
        Tente novamente ano que vem!! Você consegue!
        `)
    }
}
