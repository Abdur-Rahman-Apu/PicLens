import eventListeners from "../listeners/eventListeners.js";
import updateOnRefresh from "../photo/updateOnRefresh.js";

export default function init() {
  // Handled refresh event and first visit
  updateOnRefresh();

  // listeners collection
  eventListeners();
}
