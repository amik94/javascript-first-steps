/*
TEMA DA AULA: TIPOS DE VARIAVEIS

- Boas práticas com variáveis
- Seguindo convenções
- Conversão de tipos
- Atribuição e imutabilidade
- Refletindo sobre variáveis
*/

console.log("Trabalhando com Variaveis");

/*JS e case sensitive, por exemplo se digitar console com letra "C" Maiusculo,
no console vai apontar o erro, apontando que console está escrita incorretamente.
*/

const idade = 29;
const Idade = 35;

console.log(idade);
console.log(Idade);

/*a mesma coisa com variaveis se  digitar primeira letra maiusculo ou minusculo 
vão ser considerados como variaveis diferentes. 
Sempre é bom definir padrão para nome dos variaveis ou começar com letra minuscula 
ou com letra maiuscula (seguir padrão no prjeto).
*/

const idade = 100; // idade = 100 ou mês = "Janeiro". sem declaração do variavel não é recomendado.

/*È recomendado sempre declarar uma variavel depois de definir a palavra 
para reservar um espaço na memoria com nome do variavel declarado 
Isso pode gerar impactos nas aplicações grandes*/

