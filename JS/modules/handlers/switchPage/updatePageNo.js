import { appState } from "../../config/config.js";
import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateData } from "../../utilities/appState/updateAppState.js";

export default function updatePageNo(pageNo) {
  // removePreviousActiveClass();

  // setActiveButton(selectElm(`.switch-${pageNo}`));

  console.log(pageNo);

  switchPageButtons(pageNo);

  // updateData(appState.page, pageNo);
  updateData("page", pageNo);

  storeIntoDb();

  console.log(appState);

  fetchPhotoWithUpdate(appState);
}
