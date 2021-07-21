$(document).ready(function () {
    svg4everybody({});
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}


//Прелоадер для главной страницы
var preloader = document.getElementById("preloader_preload");
  function fadeOutnojquery(el){
    el.style.opacity = 1;
    var interpreloader = setInterval(function(){
      el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){
        clearInterval(interpreloader);preloader.style.display = "none";
      }
    },16);
  }

window.onload = function(){
  setTimeout(function(){
    fadeOutnojquery(preloader);
  },500);
};


//Таймер с акцией на главной странице
    // Update the count down every 1 second
    var x = setInterval(function() {
    // Get todays date and time
    var now = new Date().getTime();
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


var scrollBtn = $('.scroll-wrap');
var windowHeight = $(window).height(); // value in pixels
scrollBtn.click(function(){
  $('html, body').animate({
    scrollTop: $(window).scrollTop() + windowHeight
  },500);
});


$(document).ready(function () {

//Мобильное меню
  if (window.matchMedia("(max-width: 770px)").matches) {
    $(function() {
      $(document).on("click", ".menu-container .nav-menu__item-parent a", function(e) {
          e.preventDefault();
          $(".menu-container .activity").removeClass("activity");
          $(this).siblings("ul").addClass("loaded").addClass("activity");
      });
      $(document).on("click", ".menu-container .nav-submenu__item-back a", function(e) {
          e.preventDefault();
          $(".menu-container .activity").removeClass("activity");
          $(this).parent().parent().removeClass("loaded");
          $(this).parent().parent().parent().parent().addClass("activity");
      });
      $(document).on("click", ".toolbar__burger", function(e) {
          e.preventDefault();
          $(".menu-container").addClass("loaded");
          $(".mobile-menu__overlay").fadeIn();
      });
      $(document).on("click", ".mobile-menu__overlay", function(e) {
          $(".menu-container").removeClass("loaded");
          $(this).fadeOut(function() {
              $(".menu-container .loaded").removeClass("loaded");
              $(".menu-container .activity").removeClass("activity");
          });
      });
  });
}

//Открытие таба с хар-ками на детальной странице товара
  $('.read-more__price').click(function () {
    $('#character').trigger('click');
  });

//Кол-во товаров при оформлении заказа
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });





//Слайдер с товарами на главной
$('#hitOffers').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    nextArrow: document.querySelector('#nextHit'),
    prevArrow: document.querySelector('#prevHit'),
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('#newOffers').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    nextArrow: document.querySelector('#nextNew'),
    prevArrow: document.querySelector('#prevNew'),
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  $('#saleOffers').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    nextArrow: document.querySelector('#nextSale'),
    prevArrow: document.querySelector('#prevSale'),
    responsive: [
      {
        breakpoint: 1282,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });


  //Табы с товарами
  $('.tab__list-item').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.tab__content-item[data-tab="'+ id +'"]'),
        navigation = $('.nav-offers[data-tab="'+ id +'"]');
    
    $('.tab__list-item.tab__list-item_active').removeClass('tab__list-item_active');
    $(this).addClass('tab__list-item_active'); // 2
    
    $('.tab__content-item.tab__content-item_active').removeClass('tab__content-item_active');
    content.addClass('tab__content-item_active');

    $('.nav-offers.nav-offers__active').removeClass('nav-offers__active');
    navigation.addClass('nav-offers__active');

  });


//Слайдер с акциями на главной
$('.sale__list-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 0,
    //autoplay: true,
    //autoplaySpeed: 3000,
    nextArrow: document.querySelector('.next-sale'),
    prevArrow: document.querySelector('.prev-sale'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

//Слайдер с отзывами на главной
$('.review__list_slider').slick({
    centerMode: true,
    centerPadding: '40px',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 1,
    //autoplay: true,
    //autoplaySpeed: 3000,
    nextArrow: document.querySelector('.next-review'),
    prevArrow: document.querySelector('.prev-review'),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          centerPadding: '0',
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });

//Слайдер с картинками в карточке товара
$('.product-image__list').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  rows: 0,
  asNavFor: '.image-list__nav',
  //autoplay: true,
  //autoplaySpeed: 3000,
  nextArrow: document.querySelector('.nav-product__next'),
  prevArrow: document.querySelector('.nav-product__prev')
});

//Слайдер превью картинок в карточке товара
$('.image-list__nav').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  vertical: true,
  verticalSwiping: true,
  rows: 0,
  asNavFor: '.product-image__list',
  //autoplay: true,
  //autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1282,
      settings: {
        vertical: false,
        verticalSwiping: false,
      }
    },
    {
      breakpoint: 800,
      settings: {
        vertical: true,
        verticalSwiping: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        vertical: false,
        verticalSwiping: false,
        slidesToShow: 2
      }
    }
  ]
});

//Слайдер с похожими товарами
$('#similar').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  rows: 1,
  //autoplay: true,
  //autoplaySpeed: 3000,
  nextArrow: document.querySelector('.next-offer'),
  prevArrow: document.querySelector('.prev-offer'),
  responsive: [
    {
      breakpoint: 1282,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});
    
//Передаем данные из каталога в форму заказа
$(".btn-order").click(function(){      
    var product_name = $(this).closest('.catalog__item').find('.catalog__item-title').attr('data-item-name');
    $('#productName').val(product_name);
    var product_link = $(this).closest('.catalog__item').find('.catalog__item-order').attr('data-item-link');
    $('#productLink').val(product_link); 
});

//Передаем данные о количестве товара в форму заказа
$(".btn-order__detail").click(function(){      
   var quantity = document.getElementById("quantity-form").value;
   document.getElementById("productQuantity").value = quantity;
});

//Закрытие модальных окон
$('.popup__close').click(function() { 
    $('.popup').fadeOut();
});

//Маска для телефона
(function () {
    $('.mask__input_phone').inputmask({
        mask: '+7(999)999-99-99',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
})(); 

//Счетчик на главной в разделе "О компании"
var a = 0;
$(window).scroll(function() {

var oTop = $('.statistic__col').offset().top - window.innerHeight;
if (a === 0 && $(window).scrollTop() > oTop) {
  $('.statistic-title').each(function() {
    var $this = $(this),
      countTo = $this.attr('data-count');
    $({
      countNum: $this.text()
    }).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }

      });
  });
  a = 1;
}
});

//Кнопка "Наверх"
(function () {
  $(document).on('scroll', function () {
    if ($(document).scrollTop() > 400) {
      $('a[href="#top"]').show();
    } else {
      $('a[href="#top"]').hide();
    }
  });
  $('a[href="#top"]').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    return false;
  });
})();

//Анимация элементов wow.js + animation.css
var wow = new WOW(
    {
      boxClass:     'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
      animateClass: 'animated', // класс для анимации элемента (по умолчанию, animated)
      offset:       0,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
      mobile:       false,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
      live:         true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
      callback:     function(box) {
      },
      scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
  );
  wow.init();

});