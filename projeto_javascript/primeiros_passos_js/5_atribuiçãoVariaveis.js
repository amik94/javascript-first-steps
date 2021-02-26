
console.log("Trabalhando com atribuição de variáveis");

const idade = 35;
const nome = "Armine";
const sobrenome = "Samvelovna";


console.log(nome + " " + sobrenome);
//opção 1 - realizando concatenação de string de dois variaveis

console.log(nome, sobrenome);
//opção 2 - realizando interpolação  de string de dois variaveis

console.log(`Meu nome é ` + nome + " " + sobrenome);
//opção 3 - realizando concatenação  de string de dois variaveis

console.log(`Meu nome é ${nome} ${sobrenome}`);
/*opção 4 - realizando intepolação com "${}" de string de dois variaveis
è a maneria mais recomendado para fazer, pois ajuda ter um codigo mais legivel
e mais confortavel o uso quando tem textos com volume maior*/

//nome = nome + sobrenome;
//sobreescrevendo,  definindo  de uma vez na atribuição do variavel

/*existe varios tipos de variaveis "var", "let" e "const":

- Utilizando "var" e "let" temos a possibilidade de reescrever e reatribuir 
  o valor dela, pois da a possibilidade de variar a vontade o valor 
  definido na memoria. Alem disso da possibilidade de mudar caracteristica 
  da atribuição de string para numero(não é recomendado);
- Utilizando "const" que vem do palavra constante podemos atribuir variavel 
  apenas uma vez, ou seja, definindo um valor na memoria impossibilita 
  reatribuir o valor.(vai dar erro). */

/*
- Importante: É boa pratica manter o maximo possivel o uso de declaração de 
 "const" e não "let ou var" para evitar a variação. 
Porque gera gerenciamento de estado (em estado global ou de uma classe orientado ao objeto)
e fica mais dificil de entedner o comportamento do sistema se muitas variaveis estão sendo
aletrados ao tempo todo. Isso difficulta realizar debug, achar e 
até fazer com que ocorrem muitos erros. 

-Importante: não é muito recomendado o uso do "var" pois 
não respeita muito o escopo.
Quando criar um var dentro de uma função da possibilidade usa-lo
em qualquer lugar. 
Se a variavel é usada so dentro da função a vida dela tem que durar só 
enquanto aquela função está rodando. */

const primeiroNome = "João ";
const segundoNome = "Alvares";
const nomeCompleto = primeiroNome + segundoNome;
console.log(nomeCompleto);
/*Sempre quando nomear os variaveis a boa pratica é nomear
mais preciso possivel, não tem problema se ficar grande*/

let contador; //declarando variavel (declaração em uma linha)
contador = 0; //atribuindo valor (atribuição em outra linha)
contador = contador + 2; //reatribuindo o valor (reatribuição)
console.log(contador);

/* Utilizando "let" não é necessario utilizar a operação em uma linha, declarando com "let" 
podemos semparar as operações por linhas*/

const meuPrimeiroNome = "Armine";
const sobrenomeMeio = "Samvelovna";
const sobrenomeFinal = "Borges da Silva";
const meuNomeCompleto = (`Meu nome completo é: ${meuPrimeiroNome} ${sobrenomeMeio} ${sobrenomeFinal}`);
console.log(meuNomeCompleto);

/* Declarando variavel com "const", sendo valor que não pode ser alterado é prefirivel digitar
eu uma linha só.*/

