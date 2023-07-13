
// Слайдер

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiperAbout = new Swiper(".mySwiper2", {
  direction: "vertical",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


// Модальное окно "заказать звонок" в хедере...

let btnOrder = document.querySelector('.phone__btn');
let modalFade = document.querySelector('.header-row__modal');
let wrapper = document.querySelector('.wrapper');
let btnModalClose = document.querySelector('.header-row__modal-block-btn');
let modalWindow = document.querySelector('.header-row__modal-window');


btnOrder.addEventListener('click', function () {
  modalFade.classList.add('header-row__modal--active');
  wrapper.classList.add('wrapper-block');
});

btnModalClose.addEventListener('click', function () {
  modalFade.classList.remove('header-row__modal--active');
  wrapper.classList.remove('wrapper-block');

})

modalFade.addEventListener('click', function () {
  modalFade.classList.remove('header-row__modal--active');
  wrapper.classList.remove('wrapper-block');


  modalWindow.addEventListener('click', function (event) {
    event.stopPropagation();
  })
})

// Табы Наши услуги

let btnsTabServices = document.querySelectorAll('.services-link');
let windowsTabServices = document.querySelectorAll('.tab-page');

btnsTabServices.forEach(function (btn) {

  btn.addEventListener('click', function () {

    btnsTabServices.forEach(function (btn) {
      btn.classList.remove('services-link--active');
    })

    btn.classList.add('services-link--active');

    windowsTabServices.forEach(function (window) {
      window.classList.add('hidden');
    })

    let windowTabServices = document.querySelector('#' + this.dataset.tab);
    windowTabServices.classList.remove('hidden');

  })

})

// Модальные окна: Галерея работ

let btnsTabGallery = document.querySelectorAll('.gallery-images__card');
let windowsTabGallery = document.querySelectorAll('.gallery-page');


btnsTabGallery.forEach(function (btn) {

  btn.addEventListener('click', function () {

    let windowTabGal = document.querySelector('#' + this.dataset.tab);
    let btnsGalleryClose = document.querySelectorAll('.gallery-page-btn');

    windowTabGal.classList.add('gallery-page--active');
    wrapper.classList.add('wrapper-block');

    btnsGalleryClose.forEach(function (btn) {

      btn.addEventListener('click', function () {

        windowTabGal.classList.remove('gallery-page--active');
        wrapper.classList.remove('wrapper-block');
      })
    })
  })
})

// Табы Таблица

let btnsTable = document.querySelectorAll('.price-table__btn');
let tabsTable = document.querySelectorAll('.price-table__table');

btnsTable.forEach(function (btn) {

  btn.addEventListener('click', function () {

    btnsTable.forEach(function (elem) {
      elem.classList.remove('price-table__btn--active');
    })

    btn.classList.add('price-table__btn--active')

    let tabTable = document.querySelector('#' + this.dataset.tab);

    tabsTable.forEach(function (tab) {
      tab.classList.remove('price-table__table--active');
    })

    tabTable.classList.add('price-table__table--active');

  })
})

// меню-бургер

let btnBurger = document.querySelector('.header-burger');
let pageBurger = document.querySelector('.header-row__block');

btnBurger.addEventListener('click', function () {

  btnBurger.classList.toggle('header-burger--active');
  pageBurger.classList.toggle('header-row__block--active');
  wrapper.classList.toggle('wrapper-block2');
})

// Валидация формы 1

let form = document.forms.form1;
let inputName = form.name;
let inputPhone = form.phone;
let btnSubmit = form.btn_submit;
let checkbox = form.checkbox;
let checkTxt = document.querySelector('.checkbox-text');
let textarea = form.textarea;

form.addEventListener('submit', function (e) {

  let reg = /^[\d\+][\d\(\)\ -]{4,14}\d$/
  let valid = reg.test(inputPhone.value);
  if (valid !== true) {
    inputPhone.value = '*Некорректный телефон*';
    inputPhone.style.color = "red";
    e.preventDefault();
  }

  if (!checkbox.checked) {
    checkTxt.innerHTML = '*** Примите условия политики конфиденциальности, установив галочку во флажке выше***'
    e.preventDefault();
  }
})

inputPhone.addEventListener('click', function () {
  inputPhone.value = '';
  inputPhone.style.color = "white";
})

checkbox.addEventListener('click', function () {
  checkTxt.innerHTML = '';
})


