const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

//adicionar uma nova propriedade chamada maior_idade
//percorrer a idade de cada objeto da lista
//se a idade for maior que 17, maior_idade recebe true, caso contrário, recebe false


for (let usuario of usuarios){
    usuario.idade > 17 ? usuario.maiorIdade = true : usuario.maiorIdade = false;
}

console.log(usuarios);