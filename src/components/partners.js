const ESC_CODE = "Escape";
//const partnerImage = document.querySelector(".partners__partner-logo");
export const partnerPopup = document.querySelector(".popup-partner");
const partnerCloseBtn = document.querySelector(".popup-partner__close-btn");

export const partnersList = [
  {
    image: new URL("./../images/logo/partner-logo (1).png", import.meta.url),
    about:
      "Lecturers Without Borders - сообщество молодых учёных со всего мира, которые проводят лекции и мастер-классы для школ. Среди лекторов много учёных из России. Для нас математики из Сорбонны проводили занятия по квази-кристаллам, а в будущем мы планируем привозить лекторов в наш центр.",
  },
  {
    image: new URL("./../images/logo/partner-logo (2).png", import.meta.url),
    about:
      "Фонд работает в 45 регионах и с осени 2021 мы их единственные партнёры в Карачаево-Черкесии. Совместно проводим программу профориентации «Поколение Выбор». В 2021–2022 в ней приняли участие 35 подростков из 2 школ аула Икон-Халк и посёлка Эркен-Шахар. В сезоне 2022–2023 планируются ещё две школы.",
  },
  {
    image: new URL("./../images/logo/partner-logo (3).png", import.meta.url),
    about:
      "ХимБио — онлайн-школа и выездные программы для детей и подростков со всего мира! Занимаются здесь химией, биологией и физикой, много практики и опытов. Летом детей и подростков ждут экспедиции, а во время учебного года — курсы по самым разным направлениям.",
  },
];

//открытие попапов-партнеров
function openPopupPartner(popupElement) {
  popupElement.classList.add("popup-partner_opened");

  document.addEventListener("keydown", closeByEsc);
}

//закрытие попапов-партнеров

partnerCloseBtn.addEventListener("click", () =>
  closePopupPartner(partnerPopup)
);

export function closePopupPartner(popupElement) {
  popupElement.classList.remove("popup-partner_opened");

  document.removeEventListener("keydown", closeByEsc);
}

//закрытие попапов при щелке Esc
function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector(".popup-partner_opened");
    closePopupPartner(openedPopup);
  }
}

//Добавление Лого партнеров на основную страницу сайта

function renderPartners(partnerImage, partnerAbout) {
  const partnerTemplate = document.querySelector("#partners").content;
  const partnerLink = partnerTemplate
    .querySelector(".partners__logo-link")
    .cloneNode(true);
  const partnerLogo = partnerLink.querySelector(".partners__partner-logo");

  partnerLink.querySelector(".partners__partner-logo").src = partnerImage;

  partnerLogo.addEventListener("click", function () {
    document.querySelector(".popup-partner__logo-img").src = partnerImage;
    document.querySelector(".popup-partner__text").textContent = partnerAbout;

    openPopupPartner(partnerPopup);
  });

  return partnerLink;
}

export function addPartners(value, container) {
  const partner = renderPartners(value.image, value.about);
  container.append(partner);
}
