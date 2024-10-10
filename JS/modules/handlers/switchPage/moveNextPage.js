import { appState } from "../../config/config.js";
import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateData } from "../../utilities/appState/updateAppState.js";

export default function moveNextPage() {
  const { page } = appState;
  if (page !== 5) {
    const newPageNo = page + 1;

    // update buttons state
    switchPageButtons(newPageNo);

    // update page state
    updateData("page", newPageNo);

    // update the storage
    storeIntoDb();

    // fetch and update the UI
    fetchPhotoWithUpdate(appState);
  }
}
