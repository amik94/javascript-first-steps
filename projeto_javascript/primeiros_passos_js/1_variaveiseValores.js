/*
TEMA DA AULA:GUARDANDO VALORES NA MEMORIA 

- Usando o REPL(Read-Eval-Print Loop) no NodeJS
- Como imprimir valores na tela
- Declaração de variáveis
- Operadores aritméticos
*/

console.log("Guardando valores na memoria");

//console.log faz para imprimir o string na tela 

const idade = 26;

//variavel idade é conisderado como variavel. Categoria do valor que variavel idade está guardando é numero.

console.log("idade"); 

//console.log vai imprimir idade como texto, porque está salvando como string (texto).

console.log(idade);

//console.log vai imprimir referencia para variavel, ou seja, valor que está sendo guardado nela.

console.log(idade+2);
console.log(idade-2);
console.log(idade/2);
console.log(idade*2);

//aplicando operações matematicas com valor que está dentro da variavel idade.
//realizando a operação de forma indireita

const idadeSomada = idade + 2;
console.log(idadeSomada);

//aplicando operações matematicas com valor que está dentro da nossa variavel idade.
//realizando a operação de forma direita
