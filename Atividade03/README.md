# Remoção de Palavras Repetidas em um Texto

Este projeto JavaScript contém uma função chamada `removerRepeticao`, que remove palavras repetidas de uma string de texto, mantendo apenas a primeira ocorrência de cada palavra.

## 🔍 Explicação

- `regex = /[a-zA-ZÀ-ÿ0-9_]+/g`: Expressão regular que extrai palavras, incluindo acentuadas.
- `palavras`: Armazena todas as palavras encontradas no texto, em minúsculas.
- O segundo `for` verifica se uma palavra já está presente no array `resultado`. Se não estiver, ela é adicionada.
- O resultado final é uma string com as palavras únicas, separadas por espaço.

## ✅ Exemplo de Saída

Para o texto:

```
"olá olá mundo mundo"
```

O console exibirá:

```
olá mundo
```

## 🧠 Objetivo

Este código é útil para normalizar textos eliminando duplicações e mantendo a ordem original das palavras únicas.
