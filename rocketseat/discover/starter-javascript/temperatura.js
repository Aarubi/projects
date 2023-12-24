/**
 * Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32
 */

let temperatura = new String ("100C");

function swapScale(temperatura) {
    let temp = temperatura.split("");
    let scale = temp[temp.length - 1];
    let tempNumber = temp.slice(0, temp.length - 1);
    tempNumber = tempNumber.join("");
    if (scale == "C") {
        tempNumber = (tempNumber * 1.8) + 32;
        return tempNumber + "F";
    }
    else {
        tempNumber = (tempNumber - 32) / 1.8;
        return tempNumber + "C";
    }
}

console.log(swapScale(temperatura));