import { categoriesOptionsContainer } from "../../elements/elements.js";
import { addStyle } from "../../utilities/dom/domUtilities.js";

export default function closeCategories() {
  addStyle(categoriesOptionsContainer, { display: "none" });
}
