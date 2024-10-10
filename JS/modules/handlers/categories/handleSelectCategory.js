import updateDataOnFetch from "../../utilities/data/updateDataOnFetch.js";

export default async function handleSelectCategory(e) {
  const category = e.target.dataset.category;

  const updateStateData = [
    ["category", category],
    ["type", "topics"],
    ["type", "topics"],
    ["query", null],
  ];

  const fetchQuery = { type: "topics", page: 1, category };

  //   fetch and update the UI
  updateDataOnFetch({ updateStateData, fetchQuery });
}
