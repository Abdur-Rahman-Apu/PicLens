import { selectElm } from "../utilities/dom/domUtilities.js";

const categoriesContainer = selectElm(".categories");

const categoriesOptionsContainer = selectElm(".categories-options");

const searchInput = selectElm("#search");
const searchBtn = selectElm(".search-btn");

const galleryContainer = selectElm(".photos-section");

const switchGalleryContainer = selectElm(".switch-gallery");
const toastMessageContainer = selectElm(".toast-message-container");
const toastMessage = selectElm(".toast-message");

export {
  categoriesContainer,
  categoriesOptionsContainer,
  galleryContainer,
  searchBtn,
  searchInput,
  switchGalleryContainer,
  toastMessage,
  toastMessageContainer,
};
