import { accessKey } from "../../../../secret/secret.js";
import { baseUrl } from "../../config/config.js";

export default function getApiUrl({ type, page, query, category }) {
  let url = baseUrl;
  switch (type) {
    case "topics":
      url += `/${type}/${category}/photos?page=${page}&per_page=12`;
      break;
    case "query":
      url += `/search/photos?page=${page}&query=${query}&per_page=12`;
      break;

    case "photos":
      url += `/${type}/?per_page=12`;
      break;
  }

  return url + `&client_id=${accessKey}`;
}
