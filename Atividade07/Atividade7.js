// 7. Mapeamento e Ordenação Dado um array produtos = [{ nome, preco }, …], 
// crie uma função que retorne um novo array apenas com os nomes, 
// ordenados por preço crescente, usando map, sort.

const produtos = [
    { nome: "arroz", preco: 20.90 },
    { nome: "macarrão", preco: 7.50 },
    { nome: "óleo", preco: 10.25 },
    { nome: "farinha", preco: 5.25 },
    { nome: "açucar", preco: 5.50 }
];

function ordenarPorPreco(produtos) {
    const produtosOrdenados = produtos
    .sort((a, b) => a.preco - b.preco)
    .map(p => p.nome);
    return produtosOrdenados;
}

console.log(ordenarPorPreco(produtos));