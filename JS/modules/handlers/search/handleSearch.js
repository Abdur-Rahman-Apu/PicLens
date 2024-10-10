import { searchInput } from "../../elements/elements.js";
import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";
import switchPageButtons from "../../ui/switchPage/switchPageButtons.js";
import showToast from "../../ui/toast/showToast.js";
import { updateData } from "../../utilities/appState/updateAppState.js";
import toggleNextButton from "../switchPage/toggleNextButton.js";
import togglePrevButton from "../switchPage/togglePrevButton.js";

export default function handleSearch() {
  const searchValue = searchInput.value;

  if (searchValue) {
    console.log(searchValue);

    updateData("type", "query");
    updateData("page", 1);
    updateData("query", searchValue);
    updateData("category", null);

    fetchPhotoWithUpdate({ type: "query", page: 1, query: searchValue });

    switchPageButtons(1);
    togglePrevButton();
    toggleNextButton();
  } else {
    // show toast message
    console.log("toast");
    showToast({ type: "error", message: "Please fill the field" });
  }

  searchInput.value = "";
}
