import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateMultipleData } from "../appState/updateAppState.js";
import updatePrevAndNextButton from "../switchPage/updatePrevAndNextButton.js";

export default function updateDataOnFetch({ updateStateData, fetchQuery }) {
  updateMultipleData(updateStateData);

  storeIntoDb();

  fetchPhotoWithUpdate(fetchQuery);

  switchPageButtons(1);

  updatePrevAndNextButton();
}
