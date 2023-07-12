// clientes
const patricia = { nome: "Patricia", carrinho: [] }
const carlos = { nome: "Carlos", carrinho: [] }
const renato = { nome: "Renato", carrinho: [] }
const jose = { nome: "José", carrinho: [] }
const roberto = { nome: "Roberto", carrinho: [] }

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 }
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 }
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 }
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 }
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 }
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 }
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 }
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 }

//LISTA DE CLIENTES
const clientes = [patricia, carlos, renato, jose, roberto];

//ENTRADAS
let pedidos = [
    //a. Adicione uma tv, dois cabos usb e uma webcam para o José
    {
        nome: "José",
        produtos: [tv, caboUsb, caboUsb, webcam]
    },
    //b. Adicione dois notebooks para o Carlos
    {
        nome: "Carlos",
        produtos: [notebook, notebook]
    },  
    //c. Adicione um teclado, dois cabos usb, um carregador, um mouse e um monitor para a Patricia
    {
        nome: "Patricia",
        produtos: [teclado, caboUsb, caboUsb, carregador, mouse, monitor]
    },
    //d. Adicione cinco webcams para o Renato
    {
        nome: "Renato",
        produtos: [webcam, webcam, webcam, webcam, webcam]
    },
    //e. Adicione uma webcam, dois cabos usb e um monitor para o Roberto
    {
        nome: "Roberto",
        produtos: [webcam, caboUsb, caboUsb, monitor]
    }
];

for (let pedido of pedidos){               //PERCORRE CADA PEDIDO DA LISTA DE PEDIDOS
    let {nome, produtos} = pedido;         //DESESTRUTURAÇÃO DO PEDIDO, GUARDANDO O NOME E OS PRODUTOS EM VARIÁVEIS
    for (let cliente of clientes){         //PERCORRE A LISTA DE CLIENTES 
        if (cliente.nome === nome){        //SE ENCONTRAR O OBJETO CORRESPONDENTE AO CLIENTE QUE FEZ O PEDIDO...
            for (let produto of produtos){ //PERCORRE O PEDIDO DO CLIENTE 
                let encontrado = false;    
                for (let itemCarrinho of cliente.carrinho) {        //PERCORRE O CARRINHO DO CLIENTE PARA VERIFICAR SE JÁ TEM ALGUMA UNIDADE DO PRODUTO LÁ
                    if (itemCarrinho.item.nome === produto.nome) {  //SE TIVER...
                        itemCarrinho.quantidade++;                  //APENAS ADICIONA MAIS UMA UNIDADE
                        encontrado = true;                          //INDICAMOS QUE ENCONTRAMOS O ITEM NO CARRINHO
                        break;                                      //COMO NÃO TEREMOS ITENS REPETIDOS NO CARRINHO, DAMOS UM BREAK PRA SAIR DO LOOP                   
                    }   
                }
                if (!encontrado){   //DEPOIS DE PERCORRER TODO O CARRINHO, CASO O PRODUTO AINDA NÃO EXISTA, ADICIONAMOS O ITEM NOVO
                    const item = {
                        item: produto,
                        quantidade: 1
                    }
                    cliente.carrinho.push(item); //ADICIONA O ITEM AO CARRINHO  
                }
                
            }  
        }
    }
}

//SAÍDA PARA CADA CLIENTE SEM IMPORTAR A ORDEM DOS CLIENTES NOS PEDIDOS
/*for (let cliente of clientes){
    console.log(cliente);
}
*/
//SAÍDA SEGUINDO A ORDEM DOS CLIENTES NOS PEDIDOS
for (let i=0; i < pedidos.length;  i++){            //VAI DO INDICE 0 ATÉ O MAIOR ÍNDICE DA VARIÁVEL PEDIDOS
    for (let cliente of clientes){                  //PERCORRE OS CLIENTES DA VARIÁVEL CLIENTES
        if (cliente.nome === pedidos[i].nome){      //VERIFICA QUAL É O OBJETO CORRESPONDENTE AO CLIENTE QUE FEZ O PEDIDO
            console.log(`Nome: ${cliente.nome}`);   //IMPRIME O NOME DO CLIENTE
            console.log(`Carrinho:`);
            for (let itemCarrinho of cliente.carrinho){
                console.log(`Item: ${itemCarrinho.item.nome} | Valor: R$ ${(itemCarrinho.item.valorEmCentavos/100).toFixed(2)} | Quantidade: ${itemCarrinho.quantidade} `);
            }
            console.log(); //SÓ PARA PULAR UMA LINHA DE CLIENTE PARA CLIENTE
        }
    }
}
