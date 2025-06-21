# Desafio Obrigatório 2 de Lógica de Programação – +Prati & Codifica

Este repositório contém a resolução das atividades propostas nas seguintes seções:

---

## 🧠 Seção 1: Estruturas de Controle Avançadas

### 1️⃣ Validação de Datas
- Implementação da função `ehDataValida(dia, mes, ano)`.
- Verifica se a data informada é real, considerando:
  - Meses com 28, 30 ou 31 dias.
  - Tratamento de anos bissextos para o mês de fevereiro.

### 2️⃣ Jogo de Adivinhação
- Um jogo interativo onde:
  - O programa gera um número aleatório de 1 a 100.
  - O usuário tenta adivinhar o número.
  - Dicas são fornecidas: “mais alto” ou “mais baixo”.
  - Conta a quantidade de tentativas até acertar.

### 3️⃣ Palavras Únicas
- Dada uma string como `"olá olá mundo mundo"`:
  - O script extrai todas as palavras únicas.
  - Retorna o resultado em um array.

---

## 🔄 Seção 2: Funções e Recursão

### 4️⃣ Fatorial Recursivo
- Implementação da função `fatorial(n)` de forma recursiva.
- Inclui tratamento para:
  - Valores negativos (lança erro).
  - `n === 0` retorna 1.

### 5️⃣ Debounce
- Criação da função `debounce(fn, delay)`:
  - Retorna uma nova função que executa `fn` **somente se não for chamada novamente dentro do intervalo definido (`delay`)**.
  - Muito útil para otimizar eventos como `input`, `scroll` e `resize`.

### 6️⃣ Memoization
- Implementação da função `memoize(fn)`:
  - Armazena em cache os resultados de chamadas anteriores.
  - Garante que chamadas repetidas com os mesmos argumentos retornem rapidamente, sem reprocessar.

---

## 🗂️ Seção 3: Arrays e Objetos Complexos

### 7️⃣ Mapeamento e Ordenação
- Dado um array de produtos `{ nome, preco }`:
  - Retorna um novo array contendo apenas os nomes.
  - Ordenado pelo preço de forma crescente.
  - Utiliza os métodos `map()` e `sort()`.

### 8️⃣ Agrupamento por Propriedade
- Dado um array de vendas `{ cliente, total }`:
  - Usa `reduce()` para agrupar os totais de cada cliente.
  - Retorna um objeto onde as chaves são os nomes dos clientes e os valores são os totais acumulados.

### 9️⃣ Conversão Entre Formatos
- Duas funções essenciais para trabalhar com dados:
  - `paresParaObjeto(pares)`: Converte um array de pares (`[ [chave, valor], ... ]`) em um objeto.
  - `objetoParaPares(obj)`: Faz o inverso, transformando um objeto em um array de pares.

---

## 🚀 Objetivo
- Fixar conceitos de:
  - Estruturas de controle.
  - Funções e recursão.
  - Manipulação de arrays e objetos.
- Resolver problemas comuns do dia a dia de desenvolvimento com JavaScript.

---

## 🏗️ Tecnologias
- JavaScript (ES6+)