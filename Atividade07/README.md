
# Ordenação de Produtos por Preço

## 📄 Descrição

Este código demonstra como ordenar uma lista de produtos pelo preço em ordem crescente utilizando JavaScript. Além de ordenar, o código retorna apenas os nomes dos produtos na sequência correta.

## 🚀 Funcionamento

1. A constante `produtos` é uma lista (array) de objetos, onde cada objeto representa um produto com `nome` e `preço`.

2. A função `ordenarPorPreco(produtos)` faz o seguinte:
   - Utiliza `.sort((a, b) => a.preco - b.preco)` para ordenar os produtos em ordem crescente de preço.
   - Depois usa `.map(p => p.nome)` para criar um novo array contendo apenas os nomes dos produtos na ordem correta.

3. O resultado é impresso no console.

---

## 🔍 Resultado Esperado

### ▶️ Saída no console:

```
[ 'farinha', 'açucar', 'macarrão', 'óleo', 'arroz' ]
```

Os produtos estão organizados do mais barato para o mais caro.

---

## 🎯 Quando usar este tipo de ordenação?

- Para exibir listas de produtos em ordem de preço.
- Organizar dados de acordo com qualquer valor numérico (ex.: idade, quantidade, peso, etc.).
- Melhorar a experiência do usuário em sistemas de e-commerce ou listas.

---

## 💡 Benefícios

- Simples e eficiente para pequenos e médios conjuntos de dados.
- Código limpo e fácil de entender.