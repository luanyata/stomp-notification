const SockJS = require("sockjs-client");
const { over } = require("stompjs");

const StompNotification = {
  connect: null,
  disconnect: null,
  eventSend: null,
  eventReceived: null,
  subscribe: null
};

let stompClient = null;

StompNotification.connect = connect = (
  webSocketEndPoint,
  topic,
  fnLoadToken
) => {
  iziToast.info({
    message: "Inicializando a conexão com o Websocket"
  });

  let ws = new SockJS(webSocketEndPoint);
  stompClient = over(ws);

  stompClient.connect(
    {
      token: fnLoadToken
        ? fnLoadToken()
        : `Bearer ${sessionStorage.getItem("token")}`
    },
    () => {
      subscribe(topic);
    },
    errorCallBack
  );
};

StompNotification.subscribe = subscribe = topic => {
  iziToast.success({
    message: `Escrito ao topico ${topic}`
  });

  return stompClient.subscribe(topic, message => received(message));
};

StompNotification.eventSend = send = (topic, message) => {
  stompClient.send(topic, {}, JSON.stringify(message));
  iziToast.success({
    message: `Mensagem Enviada`
  });
};

StompNotification.eventReceived = received = message => {
  return message;
};

StompNotification.disconnect = disconnect = () => {
  if (stompClient !== null) {
    stompClient.disconnect();
  }
  console.log("Disconnected");
};

const errorCallBack = error => {
  console.log("errorCallBack -> " + error);
  setTimeout(() => {
    connect();
  }, 5000);
};

module.exports = { StompNotification };
