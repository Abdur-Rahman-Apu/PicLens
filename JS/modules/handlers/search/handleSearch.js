import { searchInput } from "../../elements/elements.js";
import showToast from "../../ui/toast/showToast.js";
import updateDataOnFetch from "../../utilities/data/updateDataOnFetch.js";

export default function handleSearch() {
  const searchValue = searchInput.value;

  if (searchValue) {
    //   if value is exist

    const updateStateData = [
      ["type", "query"],
      ["page", 1],
      ["query", searchValue],
      ["category", null],
    ];

    const fetchQuery = { type: "query", page: 1, query: searchValue };

    // fetch and update the UI
    updateDataOnFetch({ updateStateData, fetchQuery });
  } else {
    // show error message
    showToast({ type: "error", message: "Please fill the field" });
  }

  searchInput.value = "";
}
