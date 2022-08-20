import './index.css';
import { headerElement } from './components/constants.js';
import { Header } from './components/header.js'
import {
  addPartners,
  partnersList,
  partnerPopup,
  closePopupPartner,
} from "./components/partners";

//Секция с хедером

const header = new Header({header: headerElement});
header.enableHeader();

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