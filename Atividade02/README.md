# Jogo de Adivinhação

Este projeto implementa um simples jogo de adivinhação onde o usuário deve tentar adivinhar um número sorteado aleatoriamente entre 1 e 100.

## 📄 Descrição

O código sorteia um número aleatório entre 1 e 100 e solicita que o usuário adivinhe esse número. A cada tentativa, o programa indica se o número sorteado é maior ou menor que o palpite dado. O jogo continua até o usuário acertar o número.

## 💡 Como funciona

1. O número sorteado é gerado aleatoriamente usando `Math.random()` e `Math.floor()`.
2. O programa solicita ao usuário que insira um palpite por meio da função `prompt-sync()`, que simula uma entrada interativa no terminal.
3. A cada tentativa, o código compara o palpite do usuário com o número sorteado:
   - Se o palpite for maior que o número sorteado, o programa informa que o número sorteado é menor.
   - Se o palpite for menor que o número sorteado, o programa informa que o número sorteado é maior.
4. O jogo continua até o usuário acertar o número, momento em que o programa informa quantas tentativas foram feitas.

## 🧪 Exemplo de uso

O código pede para o usuário digitar um número entre 1 e 100. Após cada tentativa, o programa retorna uma mensagem dizendo se o número sorteado é maior ou menor do que o palpite.

```javascript
Tentativa 1. Digite um número entre 1 a 100: 50
Você errou, o número sorteado é maior do que 50
Tentativa 2. Digite um número entre 1 a 100: 75
Você errou, o número sorteado é menor do que 75
Tentativa 3. Digite um número entre 1 a 100: 60
Você errou, o número sorteado é maior do que 60
Tentativa 4. Digite um número entre 1 a 100: 65
Você acertou em 4 tentativas, o número sorteado foi 65
```


## ✅ Requisitos

- Node.js (para executar o código via terminal).
- O pacote `prompt-sync` deve ser instalado com o comando `npm install prompt-sync`.

## 🚀 Como testar

Você pode rodar o script em um terminal com Node.js:

```bash
node Atividade2.js
```

O programa pedirá para você inserir um número até adivinhar o sorteado.