import { switchGalleryContainer } from "../../elements/elements.js";

const disabledButton = (targetElm) =>
  targetElm.setAttribute("disabled", "disabled");

const enabledBtn = (targetElm) => targetElm.removeAttribute("disabled");

const setActiveButton = (targetElm) => targetElm.classList.add("active");

const removePreviousActiveClass = () => {
  console.log(switchGalleryContainer.children);
  Array.from(switchGalleryContainer.children).forEach((child) => {
    console.log(child);
    if (child.classList.contains("active")) {
      console.log("inside remove");
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
