const editButton = document.querySelector(".profile__editButton");
const closeButton = document.querySelector(".popup__close-button");

function openPopup() {
  const popup = document.querySelector(".popup");

  popup.classList.add("popup__opened");
}

function closePopup() {
  const popup = document.querySelector(".popup");

  popup.classList.remove("popup__opened");
}

editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);

const formElement = document.querySelector(".popup__form");

function handleProfileSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name").value;
  const aboutInput = document.querySelector("#about").value;

  const userName = document.querySelector(".profile__info-name");
  const userAbout = document.querySelector(".profile__info-about");

  userName.textContent = nameInput;
  userAbout.textContent = aboutInput;

  closePopup();
}

formElement.addEventListener("submit", handleProfileSubmit);
