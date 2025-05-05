# Verificador de Multa por Velocidade 🚗💨

Este programa foi desenvolvido em JavaScript e executado em ambiente Node.js com a biblioteca `prompt-sync` para entrada de dados via console.

## 📋 Objetivo

Simular o funcionamento de um **sistema de verificação de multa de trânsito**, baseado na velocidade fornecida pelo usuário.

---

## 🧠 Como funciona o programa?

1. **Entrada de Dados:**
   - O usuário é solicitado a digitar a **velocidade do carro em km/h**.
   - Essa entrada é convertida para um número utilizando `Number()`.

2. **Validação da Entrada:**
   - A função `ehNumeroValido()` verifica se a entrada fornecida é realmente um número válido.
   - Caso não seja, uma mensagem de erro é exibida.

3. **Verificação da Multa:**
   - A função `verificarMulta()` compara a velocidade inserida com o limite permitido (80 km/h).
   - Se o valor for maior que 80, é calculada uma multa de **R$ 5,00 por cada km/h excedido**.
   - O valor da multa é exibido formatado com duas casas decimais.
   - Se a velocidade for igual ou inferior a 80 km/h, o sistema informa que **nenhuma multa será aplicada**.

---

## 💡 Exemplo de funcionamento

### Entrada:
```
Digite a velocidade do carro em KM: 90
```

### Saída:
```
Velocidade não permitida, foi aplicada uma multa de 50.00 reais
```

---

## 🛠️ Requisitos

- Node.js instalado
- Biblioteca `prompt-sync`

### Instalação do prompt-sync:
```bash
npm install prompt-sync
```

---

## 📚 Finalidade

Este script tem **caráter educativo**, sendo uma excelente introdução ao uso de:
- Entrada de dados no terminal
- Conversão de tipos
- Estrutura condicional `if-else`
- Funções em JavaScript
- Validação de entrada
