import { Popup } from './Popup.js';

export class SectionCourses extends Popup {
    constructor({popup, buttonOpenCourseSelector, contentContainer}) {
        super({popupSelector: popup, contentContainer: contentContainer});
        this._buttonsOpenCourse = document.querySelectorAll(buttonOpenCourseSelector);
    }

    enableButtonsOpenPopup() {
        this._buttonsOpenCourse.forEach(button => {
            button.addEventListener("click", () => {
                super.openPopup();
              });
        })
    }
}