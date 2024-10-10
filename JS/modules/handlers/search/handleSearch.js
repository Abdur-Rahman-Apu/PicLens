import { searchInput } from "../../elements/elements.js";
import showToast from "../../ui/toast/showToast.js";
import updateDataOnFetch from "../../utilities/data/updateDataOnFetch.js";

export default function handleSearch() {
  const searchValue = searchInput.value;

  if (searchValue) {
    console.log(searchValue);

    const updateStateData = [
      ["type", "query"],
      ["page", 1],
      ["query", searchValue],
      ["category", null],
    ];

    const fetchQuery = { type: "query", page: 1, query: searchValue };

    updateDataOnFetch({ updateStateData, fetchQuery });

    // updateMultipleData(updateStateData);

    // fetchPhotoWithUpdate({ type: "query", page: 1, query: searchValue });

    // switchPageButtons(1);

    // updatePrevAndNextButton();
  } else {
    // show toast message
    console.log("toast");
    showToast({ type: "error", message: "Please fill the field" });
  }

  searchInput.value = "";
}
