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
    backgroundColor: isSuccess ? "#05c46b" : "#e84118",
    color: "#fff",
    animation: "showAnim 1.5s",
  };

  toastMessage.innerText = message;

  addStyle(toastMessageContainer, activeStyle);
}
