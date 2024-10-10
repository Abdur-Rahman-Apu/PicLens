import { getFromDb } from "../db/db.js";
import toggleNextButton from "../handlers/switchPage/toggleNextButton.js";
import togglePrevButton from "../handlers/switchPage/togglePrevButton.js";
import switchPageButtons from "../ui/switchPage/switchPageButtons.js";
import { updateData } from "../utilities/appState/updateAppState.js";
import updateDataOnFetch from "../utilities/data/updateDataOnFetch.js";
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
    const updateStateData = [
      ["type", "photos"],
      ["query", null],
      ["category", null],
    ];

    // updateData("type", "photos");
    // updateData("query", null);
    // updateData("category", null);

    const fetchQuery = { type: "photos", page: 1 };

    updateDataOnFetch({ updateStateData, fetchQuery });

    //     fetchPhotoWithUpdate({ type: "photos", page: 1 });

    //     switchPageButtons(1);
    //    updatePrevAndNextButton()
  }
}
