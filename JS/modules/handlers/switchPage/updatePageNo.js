import { appState } from "../../config/config.js";
import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateData } from "../../utilities/appState/updateAppState.js";

export default function updatePageNo(pageNo) {
  // update buttons state
  switchPageButtons(pageNo);

  // update page state in the global state
  updateData("page", pageNo);

  // update the db
  storeIntoDb();

  // fetch data and Update the UI
  fetchPhotoWithUpdate(appState);
}
