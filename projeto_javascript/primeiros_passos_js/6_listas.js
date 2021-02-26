/* TEMA DA AULA: TRABALHANDO COM MUITOS ELEMENTOS 

- Criação de Arrays;
- Inserção de itens em um array;
- Array splice;
- Palavras reservadas;
- Indices do array;
*/

console.log(`Trabalhando com Listas`);
/* Utilizando declaração de string com  (``) as crases, ajuda interpolar 
variaveis (tendo a necessidade) */


const salvador = `Salvador`;
const saoPaulo = `São Paulo`;
const rioDeJaneiro = `Rio de Janeiro`;

console.log("Destinos possíveis:");
console.log(salvador, saoPaulo, rioDeJaneiro);
// Criando lista sem arrays, fica mais trabalhoso e menos usuavel 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);
console.log(listaDeDestinos);
// Criando lista com array, fica mais pratico (menos codigo). Palavra new aqui é uma palavra reservada

listaDeDestinos.push(`Rio grande do Sul`);
console.log(listaDeDestinos);
// Adicionando um item de forma dinamica dentro da lista array já declarada, utizando ".push"

/* Importante: mesmo a lista sendo declarado como "const" isso não irá impedir para poder manipular 
os elementos dentro da lista de forma dinamica. Apenas não sera possivel reatribuir um valor para o mesmo variavel*/

listaDeDestinos.splice(4, 1);
console.log(listaDeDestinos);
/* Removendo item dentro da lista atraves da aplicão do ".splice".
   A contagem do indice de posisão começa com numero "0", ou seja,
   dentro dessa lista demostra 5 elementos, mas conta de 0 até 4. */

console.log(listaDeDestinos [3]);
/* Demostrando na tela um item espicifico da lista, precisa utilizar 
   "[ indice de uma posição especifica da lista ]" */

console.log(listaDeDestinos [0], listaDeDestinos [2]);
//Demostrando na tela mais de um item da lista