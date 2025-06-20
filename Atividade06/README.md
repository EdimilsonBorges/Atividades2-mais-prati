
# Função Memoize

## 📄 Descrição

Este código demonstra o uso da técnica de **memoização** em JavaScript. Memoização é uma estratégia de otimização que armazena os resultados de chamadas de funções para evitar cálculos repetidos quando os mesmos parâmetros são utilizados novamente.

Isso é muito útil para funções que realizam cálculos pesados ou que são chamadas frequentemente com os mesmos argumentos.

## 🚀 Funcionamento

- A função `memoize(fn)`:
  - Recebe uma função (`fn`) como parâmetro.
  - Cria um cache (objeto) para armazenar os resultados anteriores.
  - Quando a função retornada é chamada, verifica se o resultado para aqueles parâmetros já está no cache.
    - Se sim, retorna o valor armazenado e exibe "Retornando do cache".
    - Se não, executa a função, armazena o resultado no cache e exibe "Calculando e armazenando no cache".

---

## 🔍 Explicação do Exemplo

- A função `soma(a, b)` simplesmente soma dois números e imprime "Executando função passada...".

- A função `somaMemoizada` é a versão memoizada de `soma`.

### ▶️ Execução:

```javascript
console.log(somaMemoizada(20, 37)); 
console.log(somaMemoizada(20, 37)); 
console.log(somaMemoizada(42, 65)); 
console.log(somaMemoizada(42, 65));
```

### ▶️ Saída no console:

```
Executando função passada...
Calculando e armazenando no cache: [20,37]
57
Retornando do cache: [20,37]
57
Executando função passada...
Calculando e armazenando no cache: [42,65]
107
Retornando do cache: [42,65]
107
```

---

## 🎯 Quando usar Memoize?

- Funções puras (que sempre retornam o mesmo resultado para os mesmos parâmetros).
- Cálculos pesados (ex.: operações matemáticas complexas).
- Funções chamadas repetidamente com os mesmos argumentos.

---

## 💡 Benefícios

- Melhora a performance ao evitar cálculos repetitivos.
- Reduz consumo de CPU em funções pesadas.