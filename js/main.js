"use strict"

//------------------------------------------------------------------------Меню-Бургер
const burgerMenu = document.querySelector('.header__burger');
const menuBody= document.querySelector('.menu');
if(burgerMenu) {
    burgerMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      burgerMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
    });
}
let buttons = document.querySelectorAll('.menu__link');
buttons.forEach((elem)=>{
  elem.addEventListener('click',()=>{
    menuBody.classList.remove('_active');
    burgerMenu.classList.remove('_active');
  })
})
//------------------------------------------------------------------------Меню-Бургер
//------------------------------------------------------------------------Прокрутка к отзывам
const menuLinks = document.querySelectorAll('.product__rating-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header__top').offsetHeight;
      
        window.scrollTo({
        top:gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}
//------------------------------------------------------------------------Прокрутка к отзывам

//------------------------------------------------------------------------Слайдеры
$('.homepage__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
});

$('.bestseller__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  dots: false,
  prevArrow: '<button type="button" class="slick-arrows slick-arrows__left"><img src="images/arrow-left.svg" alt="arrow left"></button>',
  nextArrow: '<button type="button" class="slick-arrows slick-arrows__right"><img src="images/arrow-right.svg" alt="arrow right"></button>',
  responsive: [
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
//------------------------------------------------------------------------Слайдеры

//------------------------------------------------------------------------tabs для revital переключение текстов
function openLocation(evt, cityName) {
  // Объявляем все переменные
  var i, tabcontent, tablinks;

  // Получаем все элементы с class="tabcontent" и скрываем их
  tabcontent = document.getElementsByClassName("description__block");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получаем все элементы с классом="description__button" и удаляем класс "active"
  tablinks = document.getElementsByClassName("description__button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Показываем текущую вкладку и добаляем "active" к кнопке, которая открыла вкладку
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
//------------------------------------------------------------------------tabsдля revital переключение текстов
//------------------------------------------------------------------------search
const search = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-txt');
if(search) {
  search.addEventListener("click", function (e) {
    searchInput.classList.toggle('_active');
  });
}
//------------------------------------------------------------------------search

//------------------------------------------------------------------------tab для revital переключение фото
const photoBtn = document.querySelectorAll(".product__image");
const photoItems = document.querySelectorAll(".product__photo");
photoBtn.forEach(function(item){
    item.addEventListener("click", function(){
        let currentBtn = item;
        let photoId = currentBtn.getAttribute("data-tab");
        let currentPhoto = document.querySelector(photoId);

        if( ! currentBtn.classList.contains('active')){
          
        photoItems.forEach(function(item) {
          item.classList.remove('active');
        });

        currentPhoto.classList.add('active');
        }
    });
});
//------------------------------------------------------------------------tab для revital переключение фото

//-----------------------------------------------------------------------Уведомление об отправки в корзину
const basketClose = document.querySelector('.product__basket');
const basketOpen= document.querySelector('.product__send');
if(basketClose) {
  basketClose.addEventListener("click", function (e) {
      basketClose.classList.toggle('close');
      basketOpen.classList.toggle('open');
    });
}
//------------------------------------------------------------------------Уведомление об отправки в корзину

//------------------------------------------------------------------------Уведомление об отправки отзыва
const opinionGet = document.querySelector('.opinion__button');
const opinionClose= document.querySelector('.opinion__send');
if(opinionGet) {
  opinionGet.addEventListener("click", function (e) {
    opinionGet.classList.toggle('get');
    opinionClose.classList.toggle('get');
    });
}
//------------------------------------------------------------------------Уведомление об отправки отзыва

//------------------------------------------------------------------------Сбрасываем галочки с инпутов на странице "care"
NodeList.prototype.forEach = Array.prototype.forEach;
document.getElementById("clear").addEventListener("click", function(e) {
  var formBlock = document.getElementById("form");
  var inputArr = formBlock.querySelectorAll("input[type=checkbox]");
  inputArr.forEach(function(el) {
    el.checked = false;
  });
});
//------------------------------------------------------------------------Сбрасываем галочки с инпутов на странице "care"