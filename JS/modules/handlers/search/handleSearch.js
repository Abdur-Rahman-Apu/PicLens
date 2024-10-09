import { searchInput } from "../../elements/elements.js";

export default function handleSearch() {
  const searchValue = searchInput.value;

  if (searchValue) {
    console.log(searchValue);
  } else {
    // show toast message
    console.log("toast");
  }
}
