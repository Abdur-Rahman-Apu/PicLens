const selectElm = (className) => document.querySelector(className);

const listenEvent = (elm, event, handler) =>
  elm.addEventListener(event, handler);

const addStyle = (elm, style) => Object.assign(elm.style, style);

export { addStyle, listenEvent, selectElm };
