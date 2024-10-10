import { sendApiRequest } from "../ajax/ajax.js";
import { storeIntoDb } from "../db/db.js";
import showToast from "../ui/toast/showToast.js";
import { updateData } from "../utilities/appState/updateAppState.js";
import filterDataInfo from "../utilities/data/filterDataInfo.js";
import getApiUrl from "../utilities/getApiUrl/getApiUrl.js";
import photoDetails from "./photoDetails.js";

export default async function fetchPhotoWithUpdate(urlQuery) {
  // get the appropriate API url
  const url = getApiUrl(urlQuery);

  try {
    // send request to the API
    const data = await sendApiRequest(url);

    // handled API errors
    if (data?.errors) {
      showToast({ type: "error", message: data?.errors.toString() });
      return;
    }

    let photoData = [];

    // handled search photo event
    if (urlQuery?.type == "query") {
      photoData = filterDataInfo(data?.results);
    } else {
      photoData = filterDataInfo(data);
    }

    // update global state
    updateData("data", photoData);

    // update the storage
    storeIntoDb();

    // update the UI
    photoDetails(photoData);

    // show success message
    showToast({ type: "success", message: "Photos are updated" });
  } catch (err) {
    // show error message
    showToast({ type: "error", message: err?.message ?? "Network error" });
  }
}
