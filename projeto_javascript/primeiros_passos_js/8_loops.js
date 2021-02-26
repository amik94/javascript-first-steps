/*TEMA  DA AULA - ITERANDO SBRE COLEÇÕES

- While;
- Break;
- Entendendo o fluxo de execução do código;
- For Loop;
*/


/* 
- Na expressão condicional do while é possível utilizar qualquer operador de comparação 
  (< [menor], > [maior], <= [menor ou igual], >= [maior ou igual], == [igual a] e != [diferente de]) 
  e qualquer operador lógico (&& [and], || [ou]). 
- Todos os operadores de comparação e lógicos são válidos na expressão condicional do while! 
  Use-os com sabedoria!
*/

/* 
- O while sempre precisará de uma expressão condicional que definirá quando o laço deve ser interrompido.
- Correta. Muito bem! Lembre-se, essa expressão condicional precisará ser informada dentro dos 
  parênteses do while e pode ainda utilizar qualquer um dos operadores de comparação e operadores lógicos.
*/



/*Ao trabalharmos com laços de repetição é comum iterarmos dentro desse laço até que 
a condição de saída seja atingida. Nesse sentido, o comando break interrompe o 
fluxo de execução do laço de maneira forçada, sem precisarmos atingir a condição de saída.

Ou seja, ao colocarmos um break dentro do laço estamos falando para o 
interpretador que quando ele chegar nessa linha ele deve sair do laço independentemente
de outras condições.
*/

console.log(` \n Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 19;
const estaAcompanhada = false; 
let temPassagemComprada = false;
const destino = "São Paulo";

console.log( "\n Destinos possíveis: ");
console.log(listaDeDestinos);
const podeComprar =  idadeComprador >= 18 || estaAcompanhada == true;


//aplicando contador para poder contar os itens da lista (iniciando com posição "0")

// --------------- WHILE ----------------------

let contador  = 0;
let destinoExiste = false;
while(contador<3){ //vai ser executado caso a condição dentro bloco for verdadeira


// ----------------- BREAK ---------------------

    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; 
    }
    contador += 1; //contador = contador + 1
}

console.log("Destino existe: ", destinoExiste);// interpolação de strings


// -------------- FOR LOOP ----------------------

if(podeComprar  && destinoExiste){
    console.log("Boa Viagem!");
} else {
    console.log("Desculpe houve um erro!");
}

for(let i = 0 ; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;     
    }
}