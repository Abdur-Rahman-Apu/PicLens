import { getFromDb } from "../db/db.js";
import { updateData } from "../utilities/appState/updateAppState.js";
import fetchPhotoWithUpdate from "./fetchPhotoWithUpdate.js";
import photoDetails from "./photoDetails.js";

export default function updateOnRefresh() {
  const previousStorageData = getFromDb();

  if (previousStorageData) {
    const { data, page, query, category, type } = previousStorageData;

    updateData("data", data);
    updateData("page", page);
    updateData("query", query);
    updateData("category", category);
    updateData("type", type);

    photoDetails(previousStorageData?.data);
  } else {
    fetchPhotoWithUpdate();
  }
}
