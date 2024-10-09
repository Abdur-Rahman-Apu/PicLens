import moveNextPage from "./moveNextPage.js";
import movePreviousPage from "./movePreviousPage.js";
import toggleNextButton from "./toggleNextButton.js";
import togglePrevButton from "./togglePrevButton.js";
import updatePageNo from "./updatePageNo.js";

export default function handleSwitchGallery(e) {
  const move = e.target.dataset.move;

  console.log(move);
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

  togglePrevButton();
  toggleNextButton();
}
