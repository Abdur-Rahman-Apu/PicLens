import { accessKey } from "../../../../secret/secret.js";
import { baseUrl } from "../../config/config.js";

export default function getApiUrl({ type, page, query, category }) {
  let url = baseUrl;
  switch (type) {
    case "topics":
      url += `/topics/${category}/photos?page=${page}&`;
      break;
    case "query":
      break;

    default:
      url += `/photos/?`;
      break;
  }

  return url + `client_id=${accessKey}`;
}
