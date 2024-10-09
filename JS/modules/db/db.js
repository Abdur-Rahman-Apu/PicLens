import {
  retrieveFromStorage,
  setIntoStorage,
} from "../utilities/storage/storage.js";

const storeIntoDb = (data) => {
  setIntoStorage("picLens", data);
};

const getFromDb = () => retrieveFromStorage("picLens");

export { getFromDb, storeIntoDb };
