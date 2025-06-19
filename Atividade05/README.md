
# Função Debounce em JavaScript

## 📄 Descrição

Este código demonstra o uso de uma função **debounce** em JavaScript. O debounce é uma técnica usada para limitar a quantidade de vezes que uma função é executada. Ele faz com que uma função só seja chamada depois de um determinado tempo sem que ela seja acionada novamente.

Isso é muito útil, por exemplo, em situações como buscas automáticas enquanto o usuário digita, eventos de redimensionamento da janela ou rolagem, onde não faz sentido executar a função a cada evento disparado.

---

## 🚀 Funcionamento

- A função `debounce(fn, delay)`:
  - Recebe uma função (`fn`) e um tempo de espera em milissegundos (`delay`).
  - Retorna uma nova função que, quando chamada, cancela qualquer execução anterior agendada e inicia uma nova contagem do tempo.
  - Somente após o tempo (`delay`) sem chamadas sucessivas, a função original (`fn`) será executada.

---

## 🔍 Explicação do Exemplo

- A função `enviarBusca(termo)` simplesmente imprime no console o termo da busca.

- A constante `buscar` é a função `enviarBusca` aplicada com debounce de 1000ms (1 segundo).

- Ao chamar `buscar()` várias vezes seguidas, a função real (`enviarBusca`) só será executada **após 1 segundo desde a última chamada**.

### ▶️ No exemplo:

```javascript
buscar("j");
buscar("ja");
buscar("jav");
buscar("java");
buscar("javas");
buscar("javasc");
buscar("javascr");
buscar("javascri");
buscar("javascrip");
buscar("javascript");
```

- Todas as chamadas acontecem em sequência rápida.
- A cada chamada, o cronômetro do debounce é reiniciado.
- Quando para de receber chamadas por 1 segundo, a última entrada `"javascript"` é processada e aparece no console:

```
Buscando por: javascript
```

---

## 🎯 Quando usar Debounce?

- Campos de busca com sugestões dinâmicas.
- Eventos de redimensionamento da janela.
- Eventos de rolagem (`scroll`).
- Input de formulários onde não se deseja processar a cada tecla pressionada.

---

## 💡 Benefícios

- Reduz chamadas desnecessárias.
- Melhora performance em aplicações web.
- Evita sobrecarga de processamento ou chamadas à API.