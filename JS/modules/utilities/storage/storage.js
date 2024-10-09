const retrieveFromStorage = (key) => localStorage.getItem(key);

const setIntoStorage = (key, value) => localStorage.setItem(key, value);

export { retrieveFromStorage, setIntoStorage };
