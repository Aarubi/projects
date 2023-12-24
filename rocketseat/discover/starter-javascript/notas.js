/**
 * Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
 */

var nota = 69;

if (nota >= 90) {
    console.log('A');
}
else if (nota >= 80) {
    console.log('B');
}
else if (nota >= 70) {
    console.log('C');
}
else if (nota >= 60) {
    console.log('D');
}
else {
    console.log('F');
}
