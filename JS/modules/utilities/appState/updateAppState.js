import { appState } from "../../config/config.js";

// update single state
const updateData = (key, value) => (appState[key] = value);

// update multiple states
const updateMultipleData = (twoDimArr) => {
  twoDimArr.forEach((arr) => {
    updateData(arr[0], arr[1]);
  });
};

export { updateData, updateMultipleData };
