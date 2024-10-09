import { categoriesOptionsContainer } from "../../elements/elements.js";
import { addStyle } from "../../utilities/dom/domUtilities.js";

export default function openCategories() {
  addStyle(categoriesOptionsContainer, { display: "block" });
}
