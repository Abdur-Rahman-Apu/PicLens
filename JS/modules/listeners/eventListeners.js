import {
  categoriesContainer,
  categoriesOptionsContainer,
} from "../elements/elements.js";
import handleCloseCategories from "../handlers/categories/handleCloseCategories.js";
import handleOpenCategories from "../handlers/categories/handleOpenCategories.js";
import handleSelectCategory from "../handlers/categories/handleSelectCategory.js";
import { listenEvent } from "../utilities/dom/domUtilities.js";

export default function eventListeners() {
  listenEvent(categoriesContainer, "mouseenter", handleOpenCategories);
  listenEvent(categoriesContainer, "mouseleave", handleCloseCategories);
  listenEvent(categoriesOptionsContainer, "click", handleSelectCategory);
  //   listenEvent(categoriesOptionsContainer, "mouseleave", handleCloseCategories);
}
