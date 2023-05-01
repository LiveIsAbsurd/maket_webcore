if (window.innerWidth < 500) {
  new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 190,

    pagination: {
      el: '.swiper-pagination',
    },

  })
}

var brandListButton = document.querySelector('.brand-list-open-button');
var brandList = document.querySelector('.brand-list');

var brandIsOpen = false;

brandListButton.addEventListener('click', function () {
  if (!brandIsOpen) {
    brandList.classList.remove('brand-list--close');
    brandList.classList.add('brand-list--open');
    brandListButton.classList.add('brand-list-open-button--open');
    brandListButton.textContent = 'Скрыть';
    brandIsOpen = true;
  } else {
    brandList.classList.add('brand-list--close');
    brandList.classList.remove('brand-list--open');
    brandListButton.classList.remove('brand-list-open-button--open');
    brandListButton.textContent = 'Показать все';
    brandIsOpen = false;
  }
});