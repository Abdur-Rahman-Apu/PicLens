import fetchPhotoWithUpdate from "./fetchPhotoWithUpdate.js";

export default async function getPhotoOnFirstAppearance() {
  // fetch data on first visit
  fetchPhotoWithUpdate({ type: "photos" });
}
