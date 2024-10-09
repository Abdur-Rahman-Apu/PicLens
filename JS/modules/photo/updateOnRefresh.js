import { appState } from "../config/config.js";
import { getFromDb } from "../db/db.js";
import { updateData } from "../utilities/appState/updateAppState.js";
import fetchPhotoWithUpdate from "./fetchPhotoWithUpdate.js";
import photoDetails from "./photoDetails.js";

export default function updateOnRefresh() {
  const previousStorageData = getFromDb();

  if (previousStorageData) {
    updateData(appState, previousStorageData);
    photoDetails(previousStorageData?.data);
  } else {
    fetchPhotoWithUpdate();
  }
}
