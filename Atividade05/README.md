# Jogo Pedra, Papel ou Tesoura

Este projeto é uma simples implementação em JavaScript do clássico jogo "Pedra, Papel ou Tesoura", executado no terminal usando `prompt-sync` para entrada de dados. O jogador escolhe uma opção, o computador escolhe aleatoriamente outra, e o programa determina o vencedor com base nas regras do jogo.

## Como funciona

1. O jogo apresenta ao jogador um menu com as opções:
   - 1. PEDRA
   - 2. PAPEL
   - 3. TESOURA

2. O jogador digita um número correspondente à sua escolha.

3. O computador sorteia uma jogada aleatória (1 a 3).

4. O programa compara as escolhas do jogador e do computador e imprime o resultado:
   - Empate: se ambos escolherem a mesma opção.
   - Vitória do jogador: se sua escolha vencer a do computador.
   - Vitória do computador: se a escolha do computador vencer.

5. Caso o jogador digite um valor inválido (fora do intervalo 0–3), uma mensagem de erro será exibida.

## Estrutura do Código

- `jogar()`: Exibe o menu e retorna a escolha do jogador.
- `validarJogada(jogador)`: Verifica se a entrada é válida.
- `verificarGanhador(opcoes, computador, jogador)`: Determina o resultado com base nas escolhas.
- `play()`: Função principal que gerencia o fluxo do jogo.

## Requisitos

- Node.js instalado
- Biblioteca `prompt-sync` instalada (você pode instalar com `npm install prompt-sync`)

## Execução

```bash
node Atividade5.js
```

## Exemplo de Saída

```
----------------
| 1. PEDRA     |
| 2. PAPEL     |
| 3. TESOURA   |
----------------
Escolha uma opção: 1
O computador escolheu PAPEL, e você PEDRA. O computador ganhou!
```