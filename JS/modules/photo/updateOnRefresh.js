import { getFromDb } from "../db/db.js";
import toggleNextButton from "../handlers/switchPage/toggleNextButton.js";
import togglePrevButton from "../handlers/switchPage/togglePrevButton.js";
import switchPageButtons from "../ui/switchPage/switchPageButtons.js";
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

    switchPageButtons(page);

    photoDetails(previousStorageData?.data);

    togglePrevButton();
    toggleNextButton();
  } else {
    updateData("type", "photos");
    updateData("query", null);
    updateData("category", null);

    fetchPhotoWithUpdate({ type: "photos", page: 1 });

    switchPageButtons(1);
    togglePrevButton();
    toggleNextButton();
  }
}
