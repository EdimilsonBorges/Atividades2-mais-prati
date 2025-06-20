// 8. Agrupamento por Propriedade Em vendas = [{ cliente, total }, …], 
// use reduce para gerar um objeto onde cada chave é um 
// cliente e o valor é a soma de todos os seus total.

const vendas = [
    { cliente: "Ana", total: 50.29 },
    { cliente: "Pedro", total: 20.40 },
    { cliente: "Beatriz", total: 43.70 },
    { cliente: "Henrrique", total: 10.60 },
    { cliente: "Ana", total: 10.10 },
    { cliente: "Henrrique", total: 3.80 },
    { cliente: "Beatriz", total: 30.40 },
    { cliente: "Ana", total: 5.50 }
];

const totaisPorCliente = vendas.reduce((acumulador, venda) => {
    if (acumulador[venda.cliente]) {
        acumulador[venda.cliente] += venda.total;
    } else {
        acumulador[venda.cliente] = venda.total;
    }

    return acumulador;
}, {});

console.log(totaisPorCliente);