import { popupCloseBtn, popups } from './constants.js';

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

//закрытие попапов при щелке Esc
function closeByEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//закрытие на крестик
popupCloseBtn.forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup)
  });
});

//закрытие попапов при щелке мимо него
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened"))
      closePopup(evt.target.closest(".popup"));
  });
});
