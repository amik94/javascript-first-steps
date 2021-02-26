//TEMA DA AULA - CONVERSÃO DE TIPOS

/*
- Const e let
- Case Sensitive
- Adicionando comentários
- parseInt e parseFloat
- Usando números com casa decimal
- Atribuição de variáveis
*/

console.log("Conversão de Tipos");

console.log("2" + "2");

/*passando numeros de forma string. De fato não está sendo feita a conversão mas 
apenas a concatenação, ou seja não é operação matematica*/

console.log(parseInt("2") + parseInt("2"));

/*Como fazer para console interpretar os numeros de forma string 
serem interpretados como numeros inteiros utilizando ParseInt. */

console.log(parseFloat("10.5") + parseFloat("6.5"));

//Realizando a conversão mas com pontus flutuantes, utilizando parseFloat

console.log("10" / "2");

/*No caso da divisão mesmo pasando de forma string, realiza a divisão.
JS entende que já que está sendo aplicado a divisão, ele pega de forma automatica
e converte esses strings para numero. No caso sinal "+" é considerado um pouco especial. 
Por esse motivo no caso da "/" não precisa utilizar parseInt para realizar a aoperação matematica */

console.log("Ricardo" / "2");

/*Nesse caso o console retorna NaN(Not a Number) porque não tem como converter 
nome para numero por serem letras), ou seja, nome está sendo interpretado como NaN / para 2 
e resultado continua sendo NaN*/

console.log("7" / "2");

//JS trabalha não só com numeros inteiros mas tambem com pontos flutuantes

console.log(6.5);

//utilizando "." vai ser interpretado como numero flutuante

console.log(6, 5);

/*utilizando "," vai ser interpretado como espaço entre os numeros.
Com numeros podemos utilizar apenas "."*/

