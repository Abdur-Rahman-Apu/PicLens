import { appState } from "../../config/config.js";

const updateData = (key, value) => (appState[key] = value);

const updateMultipleData = (twoDimArr) => {
  twoDimArr.forEach((arr) => {
    updateData(arr[0], arr[1]);
  });
};

export { updateData, updateMultipleData };
