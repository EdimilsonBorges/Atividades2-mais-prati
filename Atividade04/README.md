# Função de Fatorial Recursiva

Este repositório contém uma função JavaScript simples e recursiva que calcula o **fatorial** de um número.

---


## ❓ O que é Fatorial?

O **fatorial** de um número `n` (representado como `n!`) é o produto de todos os inteiros positivos menores ou iguais a `n`.

Exemplo:

```
5! = 5 × 4 × 3 × 2 × 1 = 120
```

---

## 🔍 Explicação do Código

- `if (n < 0)`: Lança um erro se o número for negativo, já que o fatorial não é definido para negativos.
- `else if (n === 0)`: Por definição, o fatorial de 0 é 1.
- `else`: A função se chama recursivamente, multiplicando `n` por `fatorial(n - 1)`.

---

## ✅ Exemplo de Saída

```javascript
console.log(fatorial(5));
```

**Saída:**

```
120
```

---

## 📌 Observações

- O código usa recursão, o que é uma técnica onde a função se chama a si mesma.
- Para entradas muito grandes, o uso de recursão pode causar **estouro de pilha (stack overflow)**. Para esses casos, é recomendado usar uma versão iterativa.