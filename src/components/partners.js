const closeBtn = document.querySelector("popup-partner__сlose-btn");


//открытие попапов-партнеров
function openPopup(popupElement) {
  popupElement.classList.add('popup-partner_opened');

  document.addEventListener('keydown', closeByEsc);
}

//закрытие попапов
function closePopup(popupElement) {
  popupElement.classList.remove('popup-partner_opened');

  document.removeEventListener('keydown', closeByEsc);
}

//закрытие попапов при щелке Esc
function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector('.popup-partner_opened');
    closePopup(openedPopup);
  }
}