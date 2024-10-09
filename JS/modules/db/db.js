import { appState } from "../config/config.js";
import {
  retrieveFromStorage,
  setIntoStorage,
} from "../utilities/storage/storage.js";

const storeIntoDb = () => {
  console.log(appState);
  setIntoStorage("picLens", appState);
};

const getFromDb = () => retrieveFromStorage("picLens");

export { getFromDb, storeIntoDb };
