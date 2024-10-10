import { getFromDb } from "../db/db.js";
import switchPageButtons from "../ui/switchPage/switchPageButtons.js";
import { updateMultipleData } from "../utilities/appState/updateAppState.js";
import updateDataOnFetch from "../utilities/data/updateDataOnFetch.js";
import updatePrevAndNextButton from "../utilities/switchPage/updatePrevAndNextButton.js";
import photoDetails from "./photoDetails.js";

export default function updateOnRefresh() {
  // getting data from the storage
  const previousStorageData = getFromDb();

  if (previousStorageData) {
    // if exist update the UI
    const { data, page, query, category, type } = previousStorageData;

    const updateStateData = [
      ["data", data],
      ["page", page],
      ["query", query],
      ["category", category],
      ["type", type],
    ];

    // update global state
    updateMultipleData(updateStateData);

    // update buttons state
    switchPageButtons(page);

    // update the gallery section
    photoDetails(previousStorageData?.data);

    // update the prev and next button state
    updatePrevAndNextButton();
  } else {
    // if no data exist in the storage, then get photos

    const updateStateData = [
      ["type", "photos"],
      ["query", null],
      ["category", null],
    ];

    const fetchQuery = { type: "photos", page: 1 };

    // update after fetching data
    updateDataOnFetch({ updateStateData, fetchQuery });
  }
}
