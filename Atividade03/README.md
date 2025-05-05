# Calculadora de Valor de Viagem 🚌💰

Este programa foi desenvolvido em **JavaScript** usando **Node.js** com o auxílio da biblioteca `prompt-sync` para capturar dados do usuário via console.

---

## 📋 Objetivo

Calcular o **valor a ser cobrado por uma viagem** com base na quantidade de quilômetros informada pelo usuário.

---

## 🧠 Como o programa funciona?

1. **Entrada de Dados:**
   - O usuário digita a distância da viagem (em quilômetros).
   - A entrada é convertida para número com `Number()`.

2. **Validação:**
   - A função `eNumeroValido()` verifica se o valor digitado é um número e maior que zero.

3. **Cálculo do Valor:**
   - A função `calcularValor()` aplica a seguinte lógica:
     - Se a distância for **até 200 km**, o custo é **R$ 0,50 por km**.
     - Se a distância for **maior que 200 km**, o custo é **R$ 0,45 por km**.

4. **Exibição do Resultado:**
   - Se o valor for válido, o resultado é exibido com o total a ser cobrado.
   - Caso contrário, uma mensagem de erro é apresentada.

---

## 💡 Exemplo de funcionamento

### Entrada:
```
Digite a quantidade de quilômetros que você deseja percorrer em KM?: 150
```

### Saída:
```
Vai ser cobrado 75 reais para realizar essa viagem
```

---

## 🛠️ Requisitos

- Node.js instalado
- Biblioteca `prompt-sync` instalada

### Instalar prompt-sync:
```bash
npm install prompt-sync
```

---

## 🎯 Finalidade Educacional

Este código é ideal para praticar:
- Entrada de dados no terminal
- Conversão de tipos
- Validação de dados
- Estrutura condicional `if` e operador ternário
- Funções em JavaScript