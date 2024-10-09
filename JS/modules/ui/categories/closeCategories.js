import { categoriesOptionsContainer } from "../../elements/elements.js";
import { addStyle } from "../../utilities/dom/domUtilities.js";

export default function closeCategories() {
  setTimeout(() => {
    addStyle(categoriesOptionsContainer, { display: "none" });
  }, 500);
}
