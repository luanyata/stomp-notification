# Stomp Notification

Lib para aplicação de notificação usando StompJS

_Observação: Versão atual utiliza token para autenticação_

## Instalação

_Observação: Como a lib está em processo de desenvolvimento e não temos a primeira versão seu pacote ainda não foi portado para o repositorio do NPM._

No seu `package.json` em dependencias adicione a linha:

```
stomp-notification": "git+https://github.com/luanyata/stomp-notification.git#dev"
```

e depois faça a instalação do pacote com `npm install`.

## Importação:

Antes de comercarmos a utilizar a lib é necessario carregar o JS e o CSS para exibir a notificação. Para isso carregue na tag `<head>` o CSS abaixo:

### IziToast Css:

```html
<link rel="stylesheet" href="iziToast.min.css" />
```

Agora carregue também o javascript?

### IziToast JS:

```html
<script src="iziToast.min.js" type="text/javascript"></script>
```

Após carregamento vamos importar a lib para utilização:

```js
const { StompNotification } = require("stomp-notification");
```

ou

```js
import { StompNotification } from "stomp-notification";
```

## Funções:

### **connect:**

Usada para estabelecer a conexão do socket. O mesmo pode receber 3 parametros sendo o ultimo opcional: Url do Websocket, Topico a ser registrado, e opcionalmente a função para recuperar o token (caso nenhuma função seja passada o mesmo tentará recuperar o token na sessionStorage onde a key se chama token)

```js
StompNotification.connetc(wsUrl, topic, fnOptional);
```

### **disconnect:**

Usada para encerrar uma conexão com o socket

```js
StompNotification.disconnect();
```

### **eventSend:**

Usada para um envio de evento ao socket, o mesmo recebo dois parametros: Tipico a ser mandado o evento, dado do evento

```js
StompNotification.eventSend(topic, dataEvent);
```

### **eventReceived:**

Usada para receber eventos do socket. O mesmo contem um parametros que é o evento e/ou dado passado pelo socket

```js
StompNotification.eventReceived(message);
```

## License

MIT
