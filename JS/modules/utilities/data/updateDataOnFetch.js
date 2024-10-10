import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateMultipleData } from "../appState/updateAppState.js";
import updatePrevAndNextButton from "../switchPage/updatePrevAndNextButton.js";

export default function updateDataOnFetch({ updateStateData, fetchQuery }) {
  // update global state data
  updateMultipleData(updateStateData);

  //   update the db
  storeIntoDb();

  //   fetch data and update the UI
  fetchPhotoWithUpdate(fetchQuery);

  //   update the buttons state
  switchPageButtons(1);

  //   update the prev and next buttons state
  updatePrevAndNextButton();
}
