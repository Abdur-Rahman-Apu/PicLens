import eventListeners from "../listeners/eventListeners.js";
import updateOnRefresh from "../photo/updateOnRefresh.js";

export default function init() {
  //   fetch(
  //     `https://api.unsplash.com/topics/animals/photos?page=530&client_id=${accessKey}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  updateOnRefresh();

  eventListeners();
}
