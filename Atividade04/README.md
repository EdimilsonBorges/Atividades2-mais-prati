# Verificador de Triângulo

Este é um pequeno programa em JavaScript que solicita ao usuário os comprimentos dos três lados de um triângulo, valida os dados informados e verifica se esses lados formam um triângulo válido com base na **regra do triângulo**.

## 💡 O que o programa faz?

1. Solicita ao usuário três valores numéricos (os lados do triângulo).
2. Verifica se os valores são números válidos (não negativos e não letras).
3. Aplica a regra matemática para saber se os lados informados podem formar um triângulo.
4. Informa no console se **forma ou não um triângulo**.

## 📐 Regra do Triângulo

Para que três lados formem um triângulo válido:
- Cada lado deve ser **menor** do que a **soma dos outros dois**:
  ```
  A < B + C
  B < A + C
  C < A + B
  ```

## 📦 Tecnologias utilizadas

- Node.js
- Biblioteca `prompt-sync` para entrada de dados via terminal

## ▶ Como executar

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. Instale o `prompt-sync` se necessário:
   ```bash
   npm install prompt-sync
   ```
3. Execute o arquivo:
   ```bash
   node Atividade4.js
   ```

## 🧪 Exemplo de uso

```bash
Digite o primeiro lado do triângulo: 5
Digite o segundo lado do triângulo: 7
Digite o terceiro lado do triângulo: 3
É triângulo.
```

## ⚠ Observação

A função de validação `eNumeroValido()` possui um pequeno erro lógico. A condição correta para validação deveria usar `&&` no lugar de `||`, e também garantir que os valores sejam **positivos** e **numéricos**. Uma sugestão seria:

```js
function eNumeroValido() {
  return (
    !isNaN(ladoA) && ladoA > 0 &&
    !isNaN(ladoB) && ladoB > 0 &&
    !isNaN(ladoC) && ladoC > 0
  );
}
```