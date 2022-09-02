import { Popup } from './Popup.js';


export class SectionPartners extends Popup {
    constructor({popup, partnerTemplate, logoBox, contentContainer}) {
        super({popupSelector: popup, contentContainer: contentContainer});
        this._partnerTemplate = document.querySelector(partnerTemplate).content;
        this._container = document.querySelector(logoBox);
    }

    _renderPartners(partner, partnerLogo) {
        partnerLogo.src = partner.image;
        return partnerLogo;
    }


    _addPartner(partner, partnerLogo) {
        const renderedPartner = this._renderPartners(partner, partnerLogo);
        this._container.append(renderedPartner);
    }


    _addPartnerInfo(partner) {
        document.querySelector(".popup-partner__logo-img").src = partner.image;
        document.querySelector(".popup-partner__text").textContent = partner.about;
        document.querySelector(".popup-partner__website-link").href = partner.website;
        super.openPopup();
    }

    _setEventListenersSectionPartners(partnerLogo, partner) {
        partnerLogo.addEventListener('click', this._addPartnerInfo.bind(this, partner));
    }


    addPartners({partnersList}) {
        partnersList.forEach(partner => {
            const partnerLink = this._partnerTemplate.querySelector(".partners__logo-link").cloneNode(true);
            const partnerLogo = partnerLink.querySelector(".partners__partner-logo");
            this._addPartner(partner, partnerLogo);
            this._setEventListenersSectionPartners(partnerLogo, partner);
        })
    }

}