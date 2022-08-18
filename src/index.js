import "./index.css";
import imgLogoScroll from "../src/images/logo/logo-scroll.png";

import { enableChangeHeaderByScroll } from "./components/header";
import {
  addPartners,
  partnersList,
  partnerPopup,
  closePopupPartner,
} from "./components/partners";

enableChangeHeaderByScroll({ newImage: imgLogoScroll });

//Секция с партнерами
partnersList.forEach((item) => {
  const partnersContainer = document.querySelector(".partners__logo-box");
  addPartners(item, partnersContainer);
});

//закрытие попапов при щелке мимо него
const popups = document.querySelectorAll(".popup");

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup-partner_opened"))
      closePopupPartner(evt.target.closest(".popup"));
  });
});
