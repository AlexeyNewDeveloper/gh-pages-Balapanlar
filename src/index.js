import './index.css';
import { headerElement, partnersList } from './components/constants.js';
import { Header } from './components/header.js';
import { SectionPartners } from './components/SectionPartners.js';
import { SectionCourses } from './components/SectionCourses.js';
import {scroll} from './components/scroll.js'



const header = new Header({header: headerElement});
const sectionPartners = new SectionPartners({
  popup: '.popup-partner', 
  partnerTemplate: '#partners', 
  logoBox: '.partners__logo-box',
  contentContainer: '.popup-partner__container',
});
const sectionCourses = new SectionCourses({
  popup: '.popup-course', 
  buttonOpenCourseSelector: '.course-item__browse',
  contentContainer: '.popup-course__item',
});


header.enableHeader();
sectionCourses.enableButtonsOpenPopup();
sectionPartners.addPartners({partnersList: partnersList});



scroll();
