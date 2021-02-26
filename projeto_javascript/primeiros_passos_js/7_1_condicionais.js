/* TEMA DA AULA:   CONDICIONAIS E FLUXO DE EXECUÇÃO

- If e Else
- Operadores lógicos
- if encadeado
- else if
- && e ||

*/
console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

const idadeComprador = 15;
const estaAcompanhada = true; //Confirmação com tipo buleano, que no caso seria true (só tem essas duas possibilidades no tipo buleano (true/verdadeiro ou false/falço)
console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador(a) maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item

} else if (estaAcompanhada){
        console.log("Comprador(a) está acompanhado(a)");
        listaDeDestinos.splice(1, 1);//removendo item
    }else{
        console.log("Comprador(a) não é maior de idade, não posso vender");

}


console.log(listaDeDestinos);

//as condiçõeas "if" e "else" ajudam para controlar o fluxo de execução do codigo, aplicando condições.

/* Sobre Condição "if":
neese exemplo a condição que a gente passa para "if" é vender viagem para São Paulo 
caso o comprador foi maior de idade*/

/* Condição "else":
neese exemplo a condição que a gente passa para "else" é não vender viagem para São Paulo 
caso o comprador foi menor de idade*/

/* Podemos aplicar comdição dentro da condição (como segunda verificação)*/

/* È recomendado aplicar no codigo as condições quando for necessario, pois se aplicar sem necessidade isso pode impactar lá na frente, 
   possibilita surgimento de mais problemas logicas e poderá difficultar solucionar aplicações logicas, 
   achar o caminho que o codigo está realizando e isso vai imperdir de concertar o erro de forma rapida. */

//Operadores Logicos:

console.log(idadeComprador > 18);  // maior que
console.log(idadeComprador < 18);  // menor que
console.log(idadeComprador <= 18); // menor ou igual
console.log(idadeComprador >= 18); // maior ou igual
console.log(idadeComprador == 18); // um dinal de "=" realiza atribição e dois sinais de "==" singnifica comparação

