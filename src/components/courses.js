export const coursePopup = document.querySelector(".popup-course");
const courseOpenBtn  = document.querySelector(".course-item__browse");
const courseCloseBtn = document.querySelector(".popup-course__close-btn");

courseOpenBtn.addEventListener("click", () =>
  openPopup(coursePopup)
);

courseCloseBtn.addEventListener("click", () =>
  closePopup(coursePopup)
);

//закрытие попапов при щелке Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//открытие попапов
export function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//закрытие попапов
export function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}