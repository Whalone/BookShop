$(function () {

    var quickViewList = new Array();
    var customer = {};
    var num = 0; //购物车item数目
    var priceSum = 0; //购物车item总价
    selectNewBook();
    selectAllCategory();
    selectAllProduct();
    selectAdventurePro();
    /*selectAllProduct('biographic');
    selectAllProduct('children');
    selectAllProduct('cook');*/
    selectBestSaler();

    getCustomerInfo();

    getCartInfo(1);

    addCart(11,3);






    function selectNewBook() {
        var url = 'book/SelectNewBook';
        var viewHtml = '';
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                console.log('selectNewBook');
                books.map(function (book, index) {
                    if(index<9){
                        console.log(book.bookID);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.first__img').attr('href','book/bookProduct');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.first__img > img').attr('src',book.firstImage);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.second__img.animation1').attr('href','single-product.html?bookID='+book.bookID);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.second__img.animation1').attr('onclick','test()');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.second__img.animation1 > img').attr('src',book.secondImage);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > div > span').html('NEW');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > h4 > a').attr('href','single-product.html?bookID=\'+book.bookID');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > h4 > a').html(book.bookName);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > ul > li:nth-child(1)').html('$'+book.price);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);

                        createModal(book);
                    };





                });

            }
        })
    };

    function selectAllCategory() {
        var url = 'category/findAllCategory';
        var categoriesHtml = '<a class="nav-item nav-link active" data-toggle="tab" href="#nav-all" role="tab">ALL</a>';
        $.getJSON(url,function (data) {
            if(data.success){
                categories = data.categories;
                categories.map(function (category, index) {
                    categoriesHtml += '<a class="nav-item nav-link" data-toggle="tab" href="#nav-'+category.categoryName+'" role="tab" aria-selected="false">'+category.categoryName+'</a>'
                });
                $('#wrapper > section.wn__bestseller__area.bg--white.pt--80.pb--30 > div > div.row.mt--50 > div > div').html(categoriesHtml);
            }
        })
    };

    function selectAllProduct() {
        var url = 'book/FindBookByCategory';
        var child = 5;
        var num = 0;
        $.getJSON(url,function (data) {
            if(data.success){
                console.log('FindBookByCategory');
                var books = data.books;
                books.map(function (book, index) {
                    if(index<16){
                        console.log(book.bookID);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img > img').attr('src',book.firstImage);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1 > img').attr('src',book.secondImage);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').html(book.bookName);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > ul > li:nth-child(1)').html('$'+book.price);
                        $('#nav-all > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);
                        num = num + 1;
                        if(num==2){
                            child++;
                            num=0;
                        }
                        createModal(book);
                    }

                });
            }
        })

    };

    function selectAdventurePro() {
        var url = 'book/FindBookByCategory?categoryName=adventure';
        var child = 1;
        var num = 0;
        $.getJSON(url,function (data) {
            if(data.success){
                console.log('FindBookByCategory?categoryName=adventure');
                var books = data.books;
                books.map(function (book, index) {
                    if(index<16){
                        console.log(book.bookID);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img > img').attr('src',book.firstImage);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1 > img').attr('src',book.secondImage);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').attr('href','single-product.html?bookID='+book.bookID);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').html(book.bookName);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > ul > li:nth-child(1)').html('$'+book.price);
                        $('#nav-adventure > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);
                        num = num + 1;
                        if(num==2){
                            child++;
                            num=0;
                        }
                        createModal(book);
                    }

                });
            }
        })
    }

    function selectBestSaler() {
        var url='book/selectPopularBook';
        var child = 6;
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                console.log('selectPopularBook');
                books.map(function (book, index) {
                    if(index<7){
                        console.log(book.bookID);
                        $('#wrapper > section.best-seel-area.pt--80.pb--60 > div.slider.center.slick-initialized.slick-slider > div > div > div:nth-child('+child+') > div.product__thumb > a').attr('href','single-product.html?bookID='+book.bookID);
                        $('#wrapper > section.best-seel-area.pt--80.pb--60 > div.slider.center.slick-initialized.slick-slider > div > div > div:nth-child('+child+') > div.product__thumb > a > img').attr('src',book.thirdImage);
                        $('#wrapper > section.best-seel-area.pt--80.pb--60 > div.slider.center.slick-initialized.slick-slider > div > div > div:nth-child('+child+') > div.product__content.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);
                        child++;
                        createModal(book.bookID);
                    }
                    $('#wrapper > section.best-seel-area.pt--80.pb--60 > div.slider.center.slick-initialized.slick-slider > div > div > div.product.product__style--3.slick-slide.slick-current.slick-active').removeClass('slick-center');

                })
            }
        })
    }

    function createModal(book) {
        var viewHtml ='';
        if(!quickViewList.includes(book.bookID)){
            console.log(book.bookID);
             viewHtml +=''+
                '<div class="modal fade" id="productmodal_'+book.bookID+'" tabindex="-1" role="dialog">\n' +
                '\t\t\t\t<div class="modal-dialog modal__container" role="document">\n' +
                '\t\t\t\t\t<div class="modal-content">\n' +
                '\t\t\t\t\t\t<div class="modal-header modal__header">\n' +
                '\t\t\t\t\t\t\t<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t<div class="modal-body">\n' +
                '\t\t\t\t\t\t\t<div class="modal-product">\n' +
                '\t\t\t\t\t\t\t\t<!-- Start product images -->\n' +
                '\t\t\t\t\t\t\t\t<div class="product-images">\n' +
                '\t\t\t\t\t\t\t\t\t<div class="main-image images">\n' +
                '\t\t\t\t\t\t\t\t\t\t<img alt="big images" src="'+book.bigImage+'">\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t<!-- end product images -->\n' +
                '\t\t\t\t\t\t\t\t<div class="product-info">\n' +
                '\t\t\t\t\t\t\t\t\t<h1>'+book.bookName+'</h1>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="rating__and__review">\n' +
                '\t\t\t\t\t\t\t\t\t\t<ul class="rating">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li><span class="ti-star"></span></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li><span class="ti-star"></span></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li><span class="ti-star"></span></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li><span class="ti-star"></span></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<li><span class="ti-star"></span></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="review">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<a href="#">4 customer reviews</a>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="price-box-3">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="s-price-box">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="new-price">$'+book.price+'</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<span class="old-price">$45.00</span>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="quick-desc">\n' +
                '\t\t\t\t\t\t\t\t\t\t'+book.information+'\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="select__color">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h2>Author</h2>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p style="padding-left: 15px">'+book.author+'</p>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="select__size">\n' +
                '\t\t\t\t\t\t\t\t\t\t<h2>Publish Time</h2>\n' +
                '\t\t\t\t\t\t\t\t\t\t<p style="padding-left: 15px">2019-9-20</p>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="social-sharing">\n' +
                '\t\t\t\t\t\t\t\t\t\t<div class="widget widget_socialsharing_widget">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<h3 class="widget-title-modal">Share this product</h3>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t<ul class="social__net social__net--2 d-flex justify-content-start">\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li class="facebook"><a href="#" class="rss social-icon"><i class="zmdi zmdi-rss"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li class="linkedin"><a href="#" class="linkedin social-icon"><i class="zmdi zmdi-linkedin"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li class="pinterest"><a href="#" class="pinterest social-icon"><i class="zmdi zmdi-pinterest"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t\t<li class="tumblr"><a href="#" class="tumblr social-icon"><i class="zmdi zmdi-tumblr"></i></a></li>\n' +
                '\t\t\t\t\t\t\t\t\t\t\t</ul>\n' +
                '\t\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t\t<div class="addtocart-btn">\n' +
                '\t\t\t\t\t\t\t\t\t\t<a href="#">Add to cart</a>\n' +
                '\t\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t\t</div>\n' +
                '\t\t\t\t\t</div>\n' +
                '\t\t\t\t</div>\n' +
                '</div>';

            quickViewList.push(book.bookID);

            $('#quickview-wrapper').append(viewHtml);
        }
    }


    function getCustomerInfo() {
        var url = 'customer/getCustomerInfo';
        var cusMenuHtml='';
        $.getJSON(url,function (data) {
            if(data.success){
                customer = data.customer;
                cusMenuHtml = ''+
                    '<span><a href="#" style="color: black">Compare Product</a></span>\n' +
                    '<span><a href="#" style="color: black">My Account</a></span>\n' +
                    '<span><a href="#" style="color: black">My Wishlist</a></span>';
            }else{
                cusMenuHtml = ''+
                    '<span><a href="login.html">Sign In</a></span>\n' +
                    '<span><a href="#">Create An Account</a></span>'
            }
            $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.setting__bar__icon > div > div > div:nth-child(4) > div > div > div').html(cusMenuHtml);
        })
    }

    function  getCartInfo(customerID) {
        var url = 'cart/findOrderByCusID';

        $.ajax({
            url:url,
            type:'POST',
            data:{
                customerID : customerID
            },
            dataType:'json',
            success:function (data) {
                if(data.success){
                    var carts = data.carts;
                    num = carts.length;
                    var itemsHtml = '';
                    carts.map(function (cart, index) {
                        itemsHtml += ''+
                            '<div class="item01 d-flex mt--20">\n' +
                            '\t\t<div class="thumb">\n' +
                            '\t\t\t\t<a href="single-product.html"><img src="'+cart.book.fifthImage+'" alt="product images"></a>\n' +
                            '\t\t</div>\n' +
                            '\t\t<div class="content">\n' +
                            '\t\t\t\t<h6><a href="single-product.html">'+cart.book.bookName+'</a></h6>\n' +
                            '\t\t\t\t<span class="prize">$'+cart.book.price+'.00</span>\n' +
                            '\t\t\t\t<div class="product_prize d-flex justify-content-between">\n' +
                            '\t\t\t\t\t\t<span class="qun">Qty: '+cart.quantity+'</span>\n' +
                            '\t\t\t\t\t\t<ul class="d-flex justify-content-end">\n' +
                            '\t\t\t\t\t\t\t\t<li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>\n' +
                            '\t\t\t\t\t\t\t\t<li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>\n' +
                            '\t\t\t\t\t\t</ul>\n' +
                            '\t\t\t\t</div>\n' +
                            '\t\t</div>\n' +
                            '</div>';
                            priceSum += cart.book.price;
                    });
                    $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.single__items > div').html(itemsHtml);
                    $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.items-total.d-flex.justify-content-between > span:nth-child(1)').html(num+' items');
                    $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.total_amount.text-right > span').html('$'+priceSum+'.00');
                }else{

                    console.log('1111');
                }
            }

        });
    }

    function addCart(bookID,quantity) {
        if(customer=null){
            window.location.href='login.html';
        }
        var url = 'cart/addCartItem';
        $.ajax({
            url:url,
            type:'POST',
            data:{
                bookID : bookID,
                quantity : quantity
            },
            dataType:'json',
            success:function (data) {
                if(data.success){
                    addCartHtml(bookID,quantity);
                    alert('Add to shopping cart successfully!');
                }else{
                    alert('Something wrong with shopping cart! Try again!');
                }
            }
        })

    }

    function addCartHtml(bookID,quantity) {
        var url='book/selectBookByID?bookID='+bookID;
        var itemHtml='';
        $.getJSON(url,function (data) {
            if(data.success){
                var book = data.book;
                itemHtml = ''+
                    '<div class="item01 d-flex mt--20">\n' +
                    '\t\t<div class="thumb">\n' +
                    '\t\t\t\t<a href="single-product.html"><img src="'+book.fifthImage+'" alt="product images"></a>\n' +
                    '\t\t</div>\n' +
                    '\t\t<div class="content">\n' +
                    '\t\t\t\t<h6><a href="single-product.html">'+book.bookName+'</a></h6>\n' +
                    '\t\t\t\t<span class="prize">$'+book.price+'.00</span>\n' +
                    '\t\t\t\t<div class="product_prize d-flex justify-content-between">\n' +
                    '\t\t\t\t\t\t<span class="qun">Qty: '+quantity+'</span>\n' +
                    '\t\t\t\t\t\t<ul class="d-flex justify-content-end">\n' +
                    '\t\t\t\t\t\t\t\t<li><a href="#"><i class="zmdi zmdi-settings"></i></a></li>\n' +
                    '\t\t\t\t\t\t\t\t<li><a href="#"><i class="zmdi zmdi-delete"></i></a></li>\n' +
                    '\t\t\t\t\t\t</ul>\n' +
                    '\t\t\t\t</div>\n' +
                    '\t\t</div>\n' +
                    '</div>';
                $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.single__items > div').append(itemHtml);
                $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.items-total.d-flex.justify-content-between > span:nth-child(1)').html((num++)+' items');
                $('#wn__header > div > div:nth-child(1) > div:nth-child(3) > ul > li.shopcart > div > div > div.total_amount.text-right > span').html('$'+(priceSum+book.price)+'.00');
            }
        })
    }


})