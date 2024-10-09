import { appState } from "../../config/config.js";

const updateData = (key, value) => (appState[key] = value);

export { updateData };
