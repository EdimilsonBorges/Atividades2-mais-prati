# Sistema de Pontuação por Atividades

Este script em Node.js calcula a quantidade de pontos e o valor em dinheiro que um usuário ganha com base nas horas de atividades realizadas no mês.

## 💡 Funcionalidade

O usuário informa quantas horas de atividade teve no mês, e o sistema calcula os pontos acumulados e converte esses pontos em dinheiro.

### 🎯 Regras de Pontuação

- Menos de 10 horas: cada hora vale **2 pontos**
- De 10 a 20 horas: cada hora vale **5 pontos**
- Mais de 20 horas: cada hora vale **10 pontos**

### 💰 Conversão de pontos em dinheiro

- Cada ponto equivale a **R$ 0,05**

## 📦 Como executar

1. Instale o pacote `prompt-sync` se ainda não tiver:
   ```bash
   npm install prompt-sync
   ```

2. Execute o script:
   ```bash
   node Atividade8.js
   ```

## 🧠 Lógica do Código

- `eNumeroValido(numero)`: verifica se o valor digitado é um número válido e positivo.
- `calcularPontos(atividadesNoMes)`: aplica as regras de pontuação com base nas horas informadas.
- `calcularDinheiro(pontosGanhos)`: converte os pontos em valor monetário.
- O script final imprime os pontos e o dinheiro ganho.

## 📝 Exemplo de Saída

```
Digite quantas horas de atividade você teve por mês: 12
Pontos ganhos: 60 pontos, dinheiro ganho: 3.00 reais.
```

## 🚫 Validação

Se o valor informado não for numérico ou for negativo, o programa exibe uma mensagem de erro.