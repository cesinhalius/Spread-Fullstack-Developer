function calculoSaldo(saldo,itens){
    if(!saldo || !itens || !itens.length) return 'Envie todos os parametros';

    const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

    return `O saldo final sera de ${saldoFinal} reais`
}

lista = [
    {
        preco:2,
        nome:'maça',
    },
    {
        preco:30,
        nome:'roupa',
    },
    {
        preco:25,
        nome:'carne',
    },
    
];




saldo = 100;

console.log(calculoSaldo(saldo, lista))