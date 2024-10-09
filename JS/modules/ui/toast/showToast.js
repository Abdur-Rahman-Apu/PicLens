import closeToast from "./closeToast.js";
import openToast from "./openToast.js";

export default function showToast(toastData) {
  openToast(toastData);

  setTimeout(() => {
    closeToast();
  }, 3000);
}
