import { sendApiRequest } from "../ajax/ajax.js";
import { appState } from "../config/config.js";
import { storeIntoDb } from "../db/db.js";
import showToast from "../ui/toast/showToast.js";
import { updateData } from "../utilities/appState/updateAppState.js";
import filterDataInfo from "../utilities/data/filterDataInfo.js";
import getApiUrl from "../utilities/getApiUrl/getApiUrl.js";
import photoDetails from "./photoDetails.js";

export default async function fetchPhotoWithUpdate(urlQuery) {
  const url = getApiUrl(urlQuery);

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
