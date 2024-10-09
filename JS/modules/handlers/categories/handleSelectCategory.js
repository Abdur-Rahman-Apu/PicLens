import fetchPhotoWithUpdate from "../../photo/fetchPhotoWithUpdate.js";

export default async function handleSelectCategory(e) {
  const category = e.target.dataset.category;
  console.log(category);

  fetchPhotoWithUpdate({ type: "topics", page: 1, category });
}
