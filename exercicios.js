/*
Exercícios - Set em Arrays
Rode no terminal: node exercicios.js
*/

// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
if (igual) {
console.log(`✅ Correto - ${nomeExercicio}`);
} else {
console.log(`❌ Errado - ${nomeExercicio}`);
console.log(` Esperado: ${JSON.stringify(esperado)}`);
console.log(` Recebido: ${JSON.stringify(resultado)}`);
}
}
// ------------------------------------------------------


/* ============================================================
EXERCÍCIO 1 (EXEMPLO JÁ PRONTO)
============================================================ */
function contarUnicos(array) {
const semRepetidos = [...new Set(array)];
console.log(` Array sem repetição: [${semRepetidos}]`);
return semRepetidos.length;
}

testar("Exercício 1 - contarUnicos", contarUnicos([1, 2, 2, 3, 4, 4, 4, 5]), 5);


/* ============================================================
EXERCÍCIO 2
============================================================ */
function encontrarRepetidos(array) {
const vistos = new Set();
const repetidos = new Set();

for (const item of array) {
if (vistos.has(item)) {
repetidos.add(item);
} else {
vistos.add(item);
}
}

return [...repetidos];
}

testar("Exercício 2 - encontrarRepetidos", encontrarRepetidos([1, 2, 2, 3, 4, 4, 4, 5]), [2, 4]);


/* ============================================================
EXERCÍCIO 3
============================================================ */
function unirSemRepetir(array1, array2) {
const juncao = [...array1, ...array2];
return [...new Set(juncao)];
}

testar(
"Exercício 3 - unirSemRepetir",
unirSemRepetir(["Ana", "Bruno", "Carlos"], ["Bruno", "Diana", "Ana"]),
["Ana", "Bruno", "Carlos", "Diana"]
);


/* ============================================================
EXERCÍCIO 4
============================================================ */
function temRepetido(array) {
const elementosUnicos = new Set(array);
return elementosUnicos.size < array.length;
}

testar("Exercício 4 - temRepetido (sem repetido)", temRepetido([101, 102, 103]), false);
testar("Exercício 4 - temRepetido (com repetido)", temRepetido([101, 102, 101]), true);