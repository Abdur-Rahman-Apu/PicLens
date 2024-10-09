import {
  categoriesContainer,
  categoriesOptionsContainer,
  searchBtn,
  switchGalleryContainer,
} from "../elements/elements.js";
import handleCloseCategories from "../handlers/categories/handleCloseCategories.js";
import handleOpenCategories from "../handlers/categories/handleOpenCategories.js";
import handleSelectCategory from "../handlers/categories/handleSelectCategory.js";
import handleSearch from "../handlers/search/handleSearch.js";
import handleSwitchGallery from "../handlers/switchGallery/handleSwitchGallery.js";
import { listenEvent } from "../utilities/dom/domUtilities.js";

export default function eventListeners() {
  listenEvent(categoriesContainer, "mouseenter", handleOpenCategories);
  listenEvent(categoriesContainer, "mouseleave", handleCloseCategories);
  listenEvent(categoriesOptionsContainer, "click", handleSelectCategory);
  listenEvent(searchBtn, "click", handleSearch);
  listenEvent(switchGalleryContainer, "click", handleSwitchGallery);
}
