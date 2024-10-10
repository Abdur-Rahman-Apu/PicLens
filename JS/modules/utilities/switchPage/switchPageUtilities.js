import { switchGalleryContainer } from "../../elements/elements.js";

// disable the button
const disabledButton = (targetElm) =>
  targetElm.setAttribute("disabled", "disabled");

// enable the button
const enabledBtn = (targetElm) => targetElm.removeAttribute("disabled");

// add active class on the button element
const setActiveButton = (targetElm) => targetElm.classList.add("active");

// remove active class from the button element
const removePreviousActiveClass = () => {
  // search active class name on every button element and remove the class
  Array.from(switchGalleryContainer.children).forEach((child) => {
    if (child.classList.contains("active")) {
      child.classList.remove("active");
    }
  });
};

export {
  disabledButton,
  enabledBtn,
  removePreviousActiveClass,
  setActiveButton,
};
