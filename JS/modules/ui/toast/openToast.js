import {
  toastMessage,
  toastMessageContainer,
} from "../../elements/elements.js";
import { addStyle } from "../../utilities/dom/domUtilities.js";

export default function openToast({ type, message }) {
  const isSuccess = type === "success";

  const activeStyle = {
    visibility: "visible",
    scale: 1,
    opacity: 1,
    backgroundColor: isSuccess ? "#4cd137" : "#e84118",
    color: isSuccess ? "#000" : "#fff",
    animation: "showAnim 1.5s",
  };

  toastMessage.innerText = message;

  addStyle(toastMessageContainer, activeStyle);
}
