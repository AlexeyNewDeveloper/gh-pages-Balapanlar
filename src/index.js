import './index.css';
import './components/utils.js';
import './components/courses.js';
import { headerElement } from './components/constants.js';
import { Header } from './components/header.js';
import {
  addPartners,
  partnersList,
} from "./components/partners";

//Секция с хедером
const header = new Header({header: headerElement});
header.enableHeader();

//Секция с партнерами
partnersList.forEach((item) => {
  const partnersContainer = document.querySelector(".partners__logo-box");
  addPartners(item, partnersContainer);
});

