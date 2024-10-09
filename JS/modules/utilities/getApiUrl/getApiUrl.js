import { accessKey } from "../../../../secret/secret.js";
import { baseUrl } from "../../config/config.js";

export default function getApiUrl({ type, page, query, category }) {
  let url = baseUrl;
  switch (type) {
    case "topics":
      url += `/${type}/${category}/photos?page=${page}&`;
      break;
    case "query":
      url += `/search/photos?page=${page}&query=${query}&`;
      break;

    case "photos":
      url += `/${type}/?`;
      break;
  }

  return url + `client_id=${accessKey}`;
}
