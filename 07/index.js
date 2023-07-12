const livro = {
    nome: 'O poder do hábito',
    capitulos: [
        {
            nome: "O loop do hábito",
        },
        {
            nome: "O cérebro ansioso",
        },
        {
            nome: "A regra de ouro da mudança de hábito",
        },
        {
            nome: "Hábitos angulares, ou a balada de Paul O`neill",
        },
        {
            nome: "Starbucks e o hábito do sucesso",
        },
        {
            nome: "O poder de uma crise",
        },
        {
            nome: "Como a target sabe o que você quer antes que você saiba",
        },
        {
            nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
        },
        {
            nome: "A neorologia do livre-arbítrio",
        },
    ]
}

let {capitulos} = livro; //guarda os valores da propriedade capitulos do objeto livro na variável capitulos
const numCapitulos = capitulos.length; //calcula e guarda o número de capítulos
for (let i = 0; i < numCapitulos; i++){  //vai de 0 até o número de capítulos - 1
    const capituloNumerado = {
        numero: i + 1, //numera o capítulo, iniciando em 1
        nome: capitulos[i].nome //nomeia o capítulo como no objeto anterior
    };
    livro.capitulos[i] = capituloNumerado;

}
console.log(livro.capitulos);

