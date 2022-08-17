import "./index.css";
import imgLogoScroll from "../src/images/logo/logo-scroll.png";

import { enableChangeHeaderByScroll } from "./components/header";
import { addPartners, partnersList } from "./components/partners";

enableChangeHeaderByScroll({ newImage: imgLogoScroll });

//Секция с партнерами
partnersList.forEach((item) => {
    const partnersContainer = document.querySelector(".partners__logo-box");
    addPartners(item, partnersContainer);
  });