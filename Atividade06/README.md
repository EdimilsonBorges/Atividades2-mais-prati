
# Jogo de Adivinhação (1 a 5)

Este é um pequeno jogo de adivinhação implementado em JavaScript que permite ao usuário tentar adivinhar um número sorteado aleatoriamente pelo computador, entre 1 e 5. O jogo continua até que o jogador insira `0`, que serve como comando para sair.

## Funcionalidades

- Gera números aleatórios entre 1 e 5.
- Permite que o usuário faça palpites via terminal.
- Valida os palpites informados.
- Exibe mensagens indicando se o palpite está correto ou incorreto.
- Sai do programa quando o usuário digita `0`.

## Explicação do Código

### Importação do módulo

```js
prompt = require('prompt-sync')();
```

Importa a biblioteca `prompt-sync` para ler entradas do usuário no terminal.

### Função `validarPalpite(palpite)`

Valida se o palpite está fora do intervalo permitido (menor que 1 ou maior que 5) ou se não é um número. Retorna `true` se o palpite for inválido.

### Função `verificarPalpite(palpite, numeroAleatorio)`

Compara o palpite do usuário com o número sorteado e informa se o jogador acertou ou errou.

### Laço principal (`while (true) { ... }`)

- Solicita ao usuário um palpite de número entre 1 e 5.
- Valida a entrada.
- Se o usuário digitar `0`, o jogo é encerrado.
- Caso contrário, um número aleatório é sorteado e comparado com o palpite do usuário.
- O resultado (acerto ou erro) é exibido.

## Exemplo de Uso

```
Adivinhe o número sorteado pelo computador entre (1 a 5) ou 0 pra sair: 3
VOCÊ ERROU!!! O número sorteado foi 2

Adivinhe o número sorteado pelo computador entre (1 a 5) ou 0 pra sair: 2
VOCÊ ACERTOU!!! O número sorteado foi 2

Adivinhe o número sorteado pelo computador entre (1 a 5) ou 0 pra sair: 0
```

## Requisitos

- Node.js
- Biblioteca `prompt-sync` instalada (`npm install prompt-sync`)
