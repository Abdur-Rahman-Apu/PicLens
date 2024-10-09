import { appState } from "../../config/config.js";
import { switchNextBtn } from "../../elements/elements.js";
import {
  disabledButton,
  enabledBtn,
} from "../../utilities/switchPage/switchPageUtilities.js";

export default function toggleNextButton() {
  const { page } = appState;

  if (page === 5) {
    disabledButton(switchNextBtn);
  } else {
    enabledBtn(switchNextBtn);
  }
}
