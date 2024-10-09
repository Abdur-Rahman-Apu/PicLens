import { sendApiRequest } from "../../ajax/ajax.js";
import { appState } from "../../config/config.js";
import { storeIntoDb } from "../../db/db.js";
import photoDetails from "../../photo/photoDetails.js";
import showToast from "../../ui/toast/showToast.js";
import { updateData } from "../../utilities/appState/updateAppState.js";
import filterDataInfo from "../../utilities/data/filterDataInfo.js";
import getApiUrl from "../../utilities/getApiUrl/getApiUrl.js";

export default async function handleSelectCategory(e) {
  const category = e.target.dataset.category;
  console.log(category);

  const url = getApiUrl({ type: "topics", page: 1, category });

  try {
    const data = await sendApiRequest(url);
    console.log(data, "data");

    if (data?.errors) {
      showToast({ type: "error", message: data?.errors.toString() });
      return;
    }

    const photoData = filterDataInfo(data);

    updateData(appState.data, photoData);

    storeIntoDb();

    photoDetails(photoData);
  } catch (err) {
    console.log(err);
    showToast({ type: "error", message: err?.message ?? "Network error" });
  }
}
