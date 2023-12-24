/**
 * Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []

    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.
 */

let family = new Array();
family.receitas = [];
family.despesas = [];

function getBalance() {
    let balance = 0;
    for (let i = 0; i < family.receitas.length; i++) {
        balance += family.receitas[i];
    }
    for (let i = 0; i < family.despesas.length; i++) {
        balance -= family.despesas[i];
    }
    return balance;
}


function addReceita(receita) {
    family.receitas.push(receita);
}

function addDespesa(despesa) {
    family.despesas.push(despesa);
}

addReceita(100);
addReceita(200);
addReceita(300);
addDespesa(500);
addDespesa(500);

if(getBalance() < 0) {
    console.log("Família em déficit: " + 'R$' + getBalance());
}
else if(getBalance() > 0) {
    console.log("Família em sobra: " + 'R$' + getBalance());
}
else {
    console.log("Família balanceada: " +'R$ '+ getBalance());
}
