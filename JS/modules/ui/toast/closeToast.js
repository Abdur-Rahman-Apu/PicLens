import { toastMessageContainer } from "../../elements/elements.js";
import { addStyle } from "../../utilities/dom/domUtilities.js";

export default function closeToast() {
  const hideStyle = {
    visibility: "hidden",
    scale: 0,
    opacity: 0,
    animation: "hideAnim 1.5s",
  };

  addStyle(toastMessageContainer, hideStyle);
}
