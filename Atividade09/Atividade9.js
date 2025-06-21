// 9. Conversão Entre Formatos Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

const pares = [
    ["fruta", "manga"],
    ["preco", 3],
    ["tipo", "rosa"]
];

const obj = {
    item: 'celular',
    preco: 1200,
    marca: 'motorola'
};

function paresParaObjeto(pares) {
    return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
    return Object.entries(obj);
}

console.log(paresParaObjeto(pares));
console.log(objetoParaPares(obj));