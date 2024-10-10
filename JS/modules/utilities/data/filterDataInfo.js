import formatDate from "./formatDate.js";

export default function filterDataInfo(data) {
  // extract necessary informations

  return data.map((item) => {
    const {
      alt_description,
      blur_hash,
      likes,
      urls: { regular },
      user: { first_name, last_name, location, name, profile_image },
      created_at,
    } = item;

    return {
      alt: alt_description,
      hash: blur_hash,
      likes,
      url: regular,
      user: { name, first_name, last_name, location, profile_image },
      publishedAt: formatDate(created_at),
    };
  });
}
