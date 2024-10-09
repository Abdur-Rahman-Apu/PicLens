import { appState } from "../../config/config.js";
import openCategories from "../../ui/categories/openCategories.js";
import { updateTimeOutIdOfCategories } from "../../utilities/appState/updateAppState.js";

export default function handleOpenCategories(e) {
  console.log(e.currentTarget);
  const { settings: timeIdOfCloseCategories } = appState;
  console.log(timeIdOfCloseCategories);
  openCategories();
  if (timeIdOfCloseCategories) {
    clearTimeout(timeIdOfCloseCategories);
    updateTimeOutIdOfCategories(null);
  }
}
