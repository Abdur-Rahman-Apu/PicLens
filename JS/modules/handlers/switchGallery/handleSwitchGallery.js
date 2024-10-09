export default function handleSwitchGallery(e) {
  const move = e.target.dataset.move;

  console.log(move);
  switch (move) {
    case "prev":
      console.log("prev aschi");
      break;
    case "1":
      console.log("1 aschi");
      break;
    case "2":
      console.log("2 aschi");
      break;
    case "3":
      console.log("3 aschi");
      break;
    case "4":
      console.log("4 aschi");
      break;
    case "5":
      console.log("5 aschi");
      break;
    case "next":
      console.log("next aschi");
      break;
  }
}
