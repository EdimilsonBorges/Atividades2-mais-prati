// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) { 
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this,args); 
        }, delay);
    };
}

function enviarBusca(termo) {
    console.log("Buscando por:", termo);
}

const buscar = debounce(enviarBusca, 1000);

buscar("j");
buscar("ja");
buscar("jav");
buscar("java");
buscar("javas");
buscar("javasc");
buscar("javascr");
buscar("javascri");
buscar("javascrip");
buscar("javascript");