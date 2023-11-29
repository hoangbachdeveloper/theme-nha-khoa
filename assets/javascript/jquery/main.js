$(function () {

    function addClassToProductFunction () {
        if($(window).width() <= 576) {
            $('.product__function').addClass('displaynone')
        }
    }

    const windowHeight = $(window).height()
    const headerHeight = $('.header__full-width').height()
    $('.slide__item').height(windowHeight - headerHeight)

    addClassToProductFunction()

    $(window).resize(function(e) {
        $('.slide__item').height(windowHeight - headerHeight)
        // createBlogSlick() 
        // destroyBlogSlick()
        if($(window).width() < 768) {
            $('.slide__item').height($(window).width() * 9 / 16 )
        }
        if($(window).width() <= 576) {
            addClassToProductFunction()
        }
    })

    $('#blog-slick').slick({
        slidesToShow: 3,
        arrows: true,
        prevArrow: $('#blog-btn-left'),
        nextArrow: $('#blog-btn-right'),
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    })
    $('#product-decrement').click(function(e) {
        const count = $('#product-count').val()
       
        if(count > 0)
            {
                $('#product-count').val(parseInt(count - 1))
            }    
        })
    $('#product-increment').click(function(e) {
        const count = parseInt($('#product-count').val())
        console.log(typeof $('#product-count').val())
        $('#product-count').val(count + 1)
    })
    $('.product__color').click(function(e) {
        $('.product__color').removeClass('active')
        $(this).addClass('active')
        $('#product-color').text($(this).attr('title'))

    })

    $(window).scroll(function(e) {
        if($(window).scrollTop() >= headerHeight ) {
           $('#header-full-width').addClass('fixxed')
        }
        else {
           $('#header-full-width').removeClass('fixxed')
        }
    })
    $('.home__news-slide').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: true,
            swipe: true,
            swipeToSlide: true,
            // autoplay: true,
            // autoplaySpeed: 3000,
            prevArrow: $('#prev-btn'),
            nextArrow: $('#next-btn')
        }
    );
    $('.home__feedback-slide').slick(
        {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            swipe: true,
            swipeToSlide: true,
            autoplay: true,
            autoplaySpeed: 3000,
            prevArrow: $('#feedback-prev'),
            nextArrow: $('#feedback-next')
        }
    );

    $('.content-slide__wraps').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        swipeToSlide: true,
        // autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $('#banner-slide-prev'),
        nextArrow: $('#banner-slide-next')
    });

    $('.content__pagination ul li a').click(function (e) {
        $('.content__pagination ul li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.hiring__sidebar-item').click(function (e) { 
        // e.preventDefault();
        $('.hiring__sidebar-item.active').removeClass('active');
        $(this).addClass('active');
    });

    // CLICK TO SEE THUMB IMG PRODUCT DETAILS
    $('.product__img-thumb ul li ').click(function (e) {
        e.preventDefault();
        $('.product__img-thumb ul li.active').removeClass('active');
        $(this).addClass('active');
    });
    $('.product__img-thumb ul li img').click(function (e) {
        e.preventDefault();
        console.log($(this).attr('src'))
        $('.product__img-main img').attr('src', $(this).attr('src'));
    });


    // RANGER SLIDER
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        // grid: true,
        skin: "round",
        min: 0,
        max: 50000,
        from: 500,
        to: 40000,
        step: 1000,
        postfix: " vnđ"
    });
    $('#price-from').text($('.irs-from').text())
    $('#price-to').text($('.irs-to').text())
    $('.js-range-slider').change(function (e) {
        e.preventDefault();
        $('#price-from').text($('.irs-from').text())
        $('#price-to').text($('.irs-to').text())
    });

    $('.categories__container__slide').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }, 
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
    
    // SORTING SUBMIT
    $('#sorting-product').change(function(e) {
        $(this).parent().submit();
    });

    $('.categories__sorting').click(function(e) {
        e.preventDefault()
        $('.categories-content__sidebar').toggleClass('active');
    })

    // SHOW PASSWORD
    $('#show-password').change(function(e) {
        if(this.checked){
           $('.authen__password').attr('type', 'text')
        }
       else {
        $('.authen__password').attr('type', 'password')

       }
    });

    // DE-INCREMENT CART
    $('.cart__button--decrement').click(function(e) {
        e.preventDefault()
        let count = parseInt($(this).next().val())
       
    })
    $('.cart__button--increment').click(function(e) {
        e.preventDefault()
        let count = parseInt($(this).prev().val())
        $(this).prev().val(count+ 1)
    })

    // HOME SLIDE
    $('#slide').slick({
        arrows: true,
        // autoplay: true,
        nextArrow: $('#home-slide-next'),
        prevArrow: $('#home-slide-prev'),
    });
    $('#review-slide').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    $('#best-seller').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });
    $(window).click(function(e){
        // const ev = $('#product-sort-button')[0]
        // console.log(ev)

        if(e.target !== $('#product-sort-button')[0] ){
            // console.log(e.target)
            // console.log(1)
        $('#product-sort-list').removeClass('active')
            
        }
    });
    $('#product-sort-button').click(function (e) {
        $('#product-sort-list').toggleClass('active')
    })
   
    // OPEN FILTER
    $('#product-filter').click(function(e) {
       $('#top-product').toggleClass('active')
        $('#filter').toggleClass('active')
       if(window.innerWidth < 992) {
            $('#top-product').removeClass('active')
            $('#product-sidebar').addClass('active')
            $('#overlay').addClass('active')
       }
    })

    $('#overlay').click(function(e) {
        $(this).removeClass('active')
        $('#product-sidebar').removeClass('active')
        $('#top-product').removeClass('active')
        $('.blog-content__sidebar').removeClass('active')
        $('.navbar-collapse').removeClass('active')
        $('#filter').removeClass('active')

    })

    $('#button-header-nav').click(function(e) {
        $('#overlay').addClass('active')
        $('.navbar-collapse').addClass('active')

    })

    $('#product-sidebar-close').click(function(e) {
        $('#overlay').removeClass('active')
        $('#product-sidebar').removeClass('active')
    })

    $('.filter__price__box').click(function(e) {
        $(this).toggleClass('active')
        $(this).next().toggleClass('active')
    })
    $('.filter__price__text').click(function(e) {
        $(this).prev().toggleClass('active')
        $(this).toggleClass('active')
    })
    $('.filter__size__box').click(function(e) {
        $(this).addClass('active')
    })
    $('.filter__color__box').click(function(e) {
        $(this).addClass('active')
    })
    $('#blog-content__sidebar').click(function(e){
        $('.blog-content__sidebar').toggleClass('active')
        $('#overlay').toggleClass('active')
    })
      // SLIDE PARTNER ON HOME PAGE
    $('#partner-slick').slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        arrows: false,
        // autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        // centerMode: true
    })
    // CHECKBOX IN CHECKOUT PAGE
    $('.checkout__label').click(function(e) {
        $('.checkout__label--box').toggleClass('active')
        $('.checkout__form-group--hidden').slideToggle()
        $('.checkout__form-control--required').toggleClass('active')

        const input = $('.checkout__form-control--required')
        
        if(input.hasClass('active')) {
            $('.checkout__form-control--required').attr('required', 'required')
        }
        if(!input.hasClass('active'))  {
            $('.checkout__form-control--required').attr('required', false)     
        }
    }) 
    
    $('#checkout__transform').click(function(e) {
        $(this).toggleClass('active')

        if($(this).hasClass('active')){
            $(this).html('<span>Mua hàng với tư cách khách</span>')
        }
        else {
            $(this).html('Bạn đã có tài khoản? <span>Đăng nhập</span>')
        }
    })

    $('.checkout__form-group--hidden').slideUp()

    $('#checkout__transform').click(function(e) {
        $('.checkout__form--customer').toggleClass('active')
        $('.checkout__form--guess').toggleClass('active')

    })

    $(window).scroll(function(e) {
        if($(window).scrollTop() >= 200) {
            $('#back-to-top').addClass('active')
        }
        else {
            $('#back-to-top').removeClass('active')
        }
    })

    $('#back-to-top').click(function(e) {
        $(window).scrollTop(0)
    })

    // $('.checkout__cart__inner.hidden').slideUp()

    $('.checkout__toggle').click(function(e){
        $('.checkout__cart__inner').slideToggle()
    })

    function adddressForm(e, component) {
        e.preventDefault()
        $(component).parent().removeClass('active')
        $('.checkout__form--address').addClass('active')
        $('#checkout-title').text("Địa chỉ")
        $('#checkout__transform').addClass('hidden')
    }


    $('#customer-form').submit(function(e){
        adddressForm(e, '#customer-form')
    })
    $('#guess-form').submit(function(e){
        adddressForm(e, '#guess-form' )
    })

    function sortingProduct(e, className, classTarrget) {
        e.preventDefault()  
        $(classTarrget).removeClass('col-lg-6').removeClass('col-lg-4').removeClass('col-lg-3').removeClass('col-lg-2dot4')
        $(classTarrget).addClass(className)
    }
    $('.sorting__link').click(function(e) {
        $('.sorting__link').removeClass('active')
        $(this).addClass('active')
    })
    $('.sorting__link--2').click(function(e){
        sortingProduct(e, 'col-lg-6', '.product__list__item--modify' )
    })
    $('.sorting__link--3').click(function(e){
        sortingProduct(e, 'col-lg-4', '.product__list__item--modify' )
    })
    $('.sorting__link--4').click(function(e){
        sortingProduct(e, 'col-lg-3', '.product__list__item--modify' )
    })
    $('.sorting__link--5').click(function(e){
        sortingProduct(e, 'col-lg-2dot4', '.product__list__item--modify' )
    })
 

});