import { selectElm } from "../utilities/dom/domUtilities.js";

const categoriesContainer = selectElm(".categories");

const categoriesOptionsContainer = selectElm(".categories-options");

const searchInput = selectElm("#search");
const searchBtn = selectElm(".search-btn");

const switchGalleryContainer = selectElm(".switch-gallery");

export {
  categoriesContainer,
  categoriesOptionsContainer,
  searchBtn,
  searchInput,
  switchGalleryContainer,
};
