import { selectElm } from "../../utilities/dom/domUtilities.js";
import {
  removePreviousActiveClass,
  setActiveButton,
} from "../../utilities/switchPage/switchPageUtilities.js";

export default function switchPageButtons(pageNo) {
  removePreviousActiveClass();

  setActiveButton(selectElm(`.switch-${pageNo}`));
}
