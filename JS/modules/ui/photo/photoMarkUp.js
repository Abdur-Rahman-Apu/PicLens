export default function photoMarkUp(photoInfo) {
  const {
    alt,
    url,
    likes,
    user: { name, profile_image, location },
    publishedAt,
  } = photoInfo;

  return `
    <div class="photo-container">
      <div class="photo">
        <img src="${url}" alt="${alt}" />
      </div>
      <div class="photo-utilities">
        <div class="user-info">
          <img
            src="${profile_image?.large}"
            alt="This image is indicating the user"
          />
          <div class="user-name-location">
            <p class="user-name">${name}</p>
            <p class="location">${location ?? "unknown"}</p>
          </div>
        </div>
        <div class="photo-info">
          <div class="likes">
            <img
              src="./assets/images/heart.png"
              alt="This image is representing how many likes are achieved"
            />
            <p class="likes-amount">${likes}</p>
          </div>
          <div class="created-time">
            <img
              src="./assets/images/schedule.png"
              alt="This image is indicating the calendar when the pic is added"
            />
            <p>${publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
