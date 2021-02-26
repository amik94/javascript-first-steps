//Aplicando && e || na logica para remover duplicação de codigo. 

// "|| / OR" significa "OU", é utilizado quando queremos dizer  uma das opções precisa ser verdadeiro
// "&& / AND" significa "E", é utilizado quando queremos dizer  as duas opções precisam ser verdadeiros
// Os operadores lógicos devem ter no lado esquerdo e direito uma expressão booleana.

console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 18;
const estaAcompanhada = false; //Confirmação com tipo buleano, que no caso seria true (só tem essas duas possibilidades no tipo buleano (true/verdadeiro ou false/falço)
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true){ //Realizando a concatenação lógica
    console.log("Boa Viagem!");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log("Comprador(a) não é maior de idade, não será possivel realizar a venda.");

}

console.log("Embarque: \n")// "\n" é um caracter especial, pula para linha seguida
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Aprovado!");
} else {
    console.log("Não poderá realizar embarque.");

}

console.log(listaDeDestinos);