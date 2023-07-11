const carros = [
    {        
        marca: "Volkswagen",
        modelo: "Gol",
        ano: 2022,
        cor: "vermelho",
        quantidade_portas: 4,
        automatico: false
    },
    {        
        marca: "Chevrolet",
        modelo: "Onix",
        ano: 2024,
        cor: "branco",
        quantidade_portas: 4,
        automatico: true
    },
    {        
        marca: "Fiat",
        modelo: "Fiat Toro Volcano",
        ano: 2022,
        cor: "preto",
        quantidade_portas: 4,
        automatico: true
    }
];

console.log(carros);
for (let carro of carros){
    console.log(carro.modelo)
}
