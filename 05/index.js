const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
aula = [
    {
        identificador: 1,
        nome_da_aula: "Introdução a programação"
    },
    {
        identificador: 2,
        nome_da_aula: "Variáveis"
    },
    {
        identificador: 3,
        nome_da_aula: "Condicionais"
    },
    {
        identificador: 4,
        nome_da_aula: "Arrays"
    }
];

//curso.aulas = aula;
curso["aulas"] = aula;
console.log(curso);
