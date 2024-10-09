import { storeIntoDb } from "../../db/db.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import { updateData } from "../../utilities/appState/updateAppState.js";
import toggleNextButton from "../switchPage/toggleNextButton.js";
import togglePrevButton from "../switchPage/togglePrevButton.js";

export default async function handleSelectCategory(e) {
  const category = e.target.dataset.category;
  console.log(category);

  updateData("category", category);
  updateData("type", "topics");
  updateData("page", 1);
  updateData("query", null);

  storeIntoDb();

  fetchPhotoWithUpdate({ type: "topics", page: 1, category });

  switchPageButtons(1);

  togglePrevButton();

  toggleNextButton();
}
