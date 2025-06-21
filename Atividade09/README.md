
# Conversão entre Arrays de Pares e Objetos

## 📄 Descrição

Este código em JavaScript demonstra como converter um array de pares (matriz) em um objeto e como fazer o caminho inverso, transformando um objeto em um array de pares.

---

## 🚀 Funcionamento

### 🔄 Função `paresParaObjeto(pares)`
- Utiliza `Object.fromEntries()` para transformar um array de pares em um objeto.
- Exemplo de entrada:
```javascript
[["fruta", "manga"], ["preco", 3], ["tipo", "rosa"]]
```
- Saída:
```javascript
{ fruta: 'manga', preco: 3, tipo: 'rosa' }
```

### 🔄 Função `objetoParaPares(obj)`
- Utiliza `Object.entries()` para transformar um objeto em um array de pares.
- Exemplo de entrada:
```javascript
{ item: 'celular', preco: 1200, marca: 'motorola' }
```
- Saída:
```javascript
[ ['item', 'celular'], ['preco', 1200], ['marca', 'motorola'] ]
```

---

## 🔍 Saída Esperada no Console

```javascript
{ fruta: 'manga', preco: 3, tipo: 'rosa' }
[ [ 'item', 'celular' ], [ 'preco', 1200 ], [ 'marca', 'motorola' ] ]
```

---

## 🎯 Quando usar esse padrão?

- Conversão de dados entre formatos diferentes.
- Manipulação de dados vindos de APIs.
- Transformar objetos em estruturas mais fáceis de percorrer e processar.
- Trabalhar com mapas ou listas chave-valor.

---

## 💡 Benefícios

- Utiliza métodos nativos do JavaScript (`Object.fromEntries()` e `Object.entries()`), garantindo performance e simplicidade.
- Código limpo, direto e de fácil entendimento.