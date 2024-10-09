import { appState } from "../config/config.js";
import { galleryContainer } from "../elements/elements.js";
import photoMarkUp from "../ui/photo/photoMarkUp.js";

export default function photoDetails() {
  const { data } = appState;

  if (data?.length) {
    const htmlMarkup = data.map((photo) => photoMarkUp(photo));
    galleryContainer.innerHTML = htmlMarkup;
  }
}
