import toggleNextButton from "../../handlers/switchPage/toggleNextButton.js";
import togglePrevButton from "../../handlers/switchPage/togglePrevButton.js";

export default function updatePrevAndNextButton() {
  togglePrevButton();
  toggleNextButton();
}
