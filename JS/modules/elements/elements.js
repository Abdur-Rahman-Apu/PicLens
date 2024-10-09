import { selectElm } from "../utilities/dom/domUtilities.js";

const categoriesContainer = selectElm(".categories");

const categoriesOptionsContainer = selectElm(".categories-options");

const searchInput = selectElm("#search");
const searchBtn = selectElm(".search-btn");

export {
  categoriesContainer,
  categoriesOptionsContainer,
  searchBtn,
  searchInput,
};
