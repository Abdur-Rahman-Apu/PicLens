import { galleryContainer } from "../elements/elements.js";
import photoMarkUp from "../ui/photo/photoMarkUp.js";

export default function photoDetails(data) {
  if (data?.length) {
    const htmlMarkup = data.map((photo) => photoMarkUp(photo));
    galleryContainer.innerHTML = htmlMarkup;
  }
}
