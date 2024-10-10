import updatePrevAndNextButton from "../../utilities/switchPage/updatePrevAndNextButton.js";
import moveNextPage from "./moveNextPage.js";
import movePreviousPage from "./movePreviousPage.js";
import updatePageNo from "./updatePageNo.js";

export default function handleSwitchGallery(e) {
  // get the clicked button name
  const move = e.target.dataset.move;

  switch (move) {
    case "prev":
      movePreviousPage();
      break;

    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      updatePageNo(Number(move));
      break;

    case "next":
      moveNextPage();
      break;
  }

  // update the prev and next buttons state
  updatePrevAndNextButton();
}
