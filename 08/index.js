const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

let mensagem = "";
for (let usuario of usuarios){
    const numPets = usuario.pets.length;
    if (numPets == 0){
        mensagem = "não tenho pets";
    }else{
        mensagem = numPets == 1? `tenho ${numPets} pet` : `tenho ${numPets} pets`;
    }
    console.log(`Sou ${usuario.nome} e ${mensagem}.`);
};

