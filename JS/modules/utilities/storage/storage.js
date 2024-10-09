const retrieveFromStorage = (key) => JSON.parse(localStorage.getItem(key));

const setIntoStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export { retrieveFromStorage, setIntoStorage };
