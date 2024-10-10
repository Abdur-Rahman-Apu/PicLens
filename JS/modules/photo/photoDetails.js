import { galleryContainer } from "../elements/elements.js";
import photoMarkUp from "../ui/photo/photoMarkUp.js";

export default function photoDetails(data) {
  if (data?.length) {
    // if photo data available, then update the UI
    const htmlMarkup = data.map((photo) => photoMarkUp(photo)).join("");
    galleryContainer.innerHTML = htmlMarkup;
  }
}
