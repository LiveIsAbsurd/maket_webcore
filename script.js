if (window.innerWidth < 500) {
  new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 190,

    pagination: {
      el: '.swiper-pagination',
    },

  })
}

var brandListButton = document.querySelector('.brand-list-button');
var brandList = document.querySelector('.brand-list');

brandListButton.addEventListener('click', function () {
  if (brandList.classList.contains('brand-list--close')) {
    brandList.classList.remove('brand-list--close');
    brandList.classList.add('brand-list--open');
    brandListButton.classList.add('brand-list-button--open');
    brandListButton.textContent = 'Скрыть';
  } else {
    brandList.classList.add('brand-list--close');
    brandList.classList.remove('brand-list--open');
    brandListButton.classList.remove('brand-list-button--open');
    brandListButton.textContent = 'Показать все';
  }
});