import { appState } from "../../config/config.js";
import { switchPrevBtn } from "../../elements/elements.js";
import {
  disabledButton,
  enabledBtn,
} from "../../utilities/switchPage/switchPageUtilities.js";

export default function togglePrevButton() {
  const { page } = appState;

  if (page === 1) {
    disabledButton(switchPrevBtn);
  } else {
    enabledBtn(switchPrevBtn);
  }
}
