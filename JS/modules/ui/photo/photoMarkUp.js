export default function photoMarkUp(photoInfo) {
  return `
    <div class="photo-container">
      <div class="photo">
        <img src="./assets/images/1.jpg" alt="" />
      </div>
      <p class="photo-name">Sky</p>
      <div class="photo-utilities">
        <div class="user-info">
          <img
            src="./assets/images/avatar.png"
            alt="This image is indicating the user"
          />
          <div class="user-name-location">
            <p class="user-name">Pierre Lemos</p>
            <p class="location">Toulouse</p>
          </div>
        </div>
        <div class="photo-info">
          <div class="likes">
            <img
              src="./assets/images/heart.png"
              alt="This image is representing how many likes are achieved"
            />
            <p class="likes-amount">100</p>
          </div>
          <div class="created-time">
            <img
              src="./assets/images/schedule.png"
              alt="This image is indicating the calendar when the pic is added"
            />
            <p>16-08-2019</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
