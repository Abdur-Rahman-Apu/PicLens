import { appState } from "../../config/config.js";

const updateTimeOutIdOfCategories = (value) =>
  (appState.settings.timeIdOfCloseCategories = value);

export { updateTimeOutIdOfCategories };
