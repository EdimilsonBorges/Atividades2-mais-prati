
# Agrupar Totais de Vendas por Cliente

## 📄 Descrição

Este código em JavaScript tem como objetivo calcular o total de vendas realizadas por cada cliente. Utilizando o método `reduce()`, ele percorre uma lista de vendas e soma os valores de acordo com o nome do cliente.

---

## 🚀 Funcionamento

- O array `vendas` contém objetos com dois atributos: `cliente` (nome do cliente) e `total` (valor da venda).

- A função `reduce()` percorre cada item do array `vendas` e:

  - Verifica se o nome do cliente já existe no objeto `acumulador`.
  - Se já existir, soma o valor da venda atual ao total acumulado.
  - Se não existir, cria uma nova chave no acumulador com o valor da venda atual.

- O resultado é um objeto onde cada chave é o nome de um cliente e o valor é o total acumulado das vendas desse cliente.

---

## 🔍 Saída Esperada

```javascript
{
  Ana: 65.89,
  Pedro: 20.4,
  Beatriz: 74.1,
  Henrrique: 14.4
}
```

---

## 🎯 Quando usar esse padrão?

- Ao trabalhar com agrupamentos de dados.
- Relatórios de vendas.
- Análises de dados e dashboards.
- Processamento de listas de objetos em JavaScript.

---

## 💡 Benefícios

- Código limpo e funcional.
- Uso eficiente do método `reduce()` para transformar arrays em objetos agrupados.
- Fácil manutenção e extensão.