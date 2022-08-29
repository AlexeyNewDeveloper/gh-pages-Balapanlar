import { openPopup } from './utils.js';
import { courseOpenBtn, coursePopup } from './constants.js';

courseOpenBtn.addEventListener("click", function () {
  openPopup(coursePopup);
});
