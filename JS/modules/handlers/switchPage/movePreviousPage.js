import { appState } from "../../config/config.js";
import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateData } from "../../utilities/appState/updateAppState.js";

export default function movePreviousPage() {
  const { page } = appState;

  if (page !== 1) {
    const newPageNo = page - 1;

    // removePreviousActiveClass();

    // setActiveButton(selectElm(`.switch-${newPageNo}`));

    switchPageButtons(newPageNo);

    // updateData(appState.page, newPageNo);
    updateData("page", newPageNo);

    console.log(appState);
    storeIntoDb();

    fetchPhotoWithUpdate(appState);
  }
}
