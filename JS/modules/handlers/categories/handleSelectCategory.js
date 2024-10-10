import updateDataOnFetch from "../../utilities/data/updateDataOnFetch.js";

export default async function handleSelectCategory(e) {
  const category = e.target.dataset.category;
  console.log(category);

  const updateStateData = [
    ["category", category],
    ["type", "topics"],
    ["type", "topics"],
    ["query", null],
  ];

  const fetchQuery = { type: "topics", page: 1, category };

  updateDataOnFetch({ updateStateData, fetchQuery });
  //   updateMultipleData(updateStateData);

  //   storeIntoDb();

  //   fetchPhotoWithUpdate({ type: "topics", page: 1, category });

  //   switchPageButtons(1);

  //   updatePrevAndNextButton();
}
