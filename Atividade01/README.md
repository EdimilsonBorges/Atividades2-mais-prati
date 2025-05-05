# Cálculo de Tempo de Vida Perdido Fumando Cigarro

Este programa em JavaScript calcula aproximadamente **quanto tempo de vida (em dias, horas e minutos)** uma pessoa pode ter perdido com base no número de cigarros fumados por dia e o tempo (em anos) que fuma.

## 📋 Como Funciona

Cada cigarro fumado é estimado em uma **perda de 10 minutos de vida**. O programa utiliza essa estimativa para calcular o total de minutos perdidos ao longo dos anos e converte esse valor em dias, horas e minutos.

### Fórmula básica:

```
tempoPerdido = cigarrosPorDia × 10 minutos × 365 dias × anosFumando
```

Esse tempo total em minutos é convertido em:

- Dias (1 dia = 1440 minutos)
- Horas (1 hora = 60 minutos)
- Minutos restantes

## 🚀 Como Usar

### Pré-requisitos

- Ter o [Node.js](https://nodejs.org/) instalado.
- Instalar o pacote `prompt-sync` para capturar a entrada do usuário no terminal:

```bash
npm install prompt-sync
```

### Execução

1. Baixe o arquivo Atividade1.js 
2. Execute com Node.js:

```bash
node Atividade1.js
```

3. O programa solicitará duas entradas:
   - Quantos cigarros você fuma por dia
   - Há quantos anos você fuma

4. O resultado será exibido no terminal, indicando o tempo total de vida perdido.

### Exemplo de uso:

```
Digite quantos cigarros você fuma por dia: 10
Digite quantos anos faz que você fuma: 5
Você perdeu 12 dias 4 horas e 0 minutos de vida
```

## 📂 Estrutura do Código

- `prompt-sync`: usado para capturar entrada do usuário no terminal.
- `minutosPorDia`: calcula o tempo perdido em minutos por dia.
- `tempoDePerdaEmMinutos`: calcula o tempo total perdido, em minutos, baseado nos anos.
- `transformarMinutosEmDias`: converte minutos para um formato mais legível (dias, horas, minutos).
- `imprimirResultado`: coordena a validação e impressão final do resultado.

## ✅ Validação

O código checa se as entradas são números válidos antes de fazer os cálculos.

## ⚠️ Aviso

Este é um cálculo aproximado com base em estimativas de saúde pública. O valor real pode variar, mas serve como alerta para os riscos associados ao tabagismo.

---

Feito com 💻 para fins educativos e de conscientização.