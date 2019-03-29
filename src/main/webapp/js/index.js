$(function () {

    var quickViewList = new Array();
    selectNewBook();
    selectAllCategory();
    selectAllProduct();


    function selectNewBook() {
        var url = 'book/SelectNewBook';
        var viewHtml = '';
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                books.map(function (book, index) {
                    if(index<9){
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.first__img').attr('href','#');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.first__img > img').attr('src',book.firstImage);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.second__img.animation1').attr('href','#');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > a.second__img.animation1 > img').attr('src',book.secondImage);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__thumb > div > span').html('NEW');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > h4 > a').attr('href','#');
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > h4 > a').html(book.bookName);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > ul > li:nth-child(1)').html('$'+book.price);
                        $('#wrapper > section.wn__product__area.brown--color.pt--80.pb--30 > div > div.furniture--4.border--round.arrows_style.owl-carousel.owl-theme.row.mt--50.owl-loaded.owl-drag > div.owl-stage-outer > div > div:nth-child('+(index+5)+') > div > div > div.product__content.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);

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

                    };

                    $('#quickview-wrapper').html(viewHtml);



                });

            }
        })
    }

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
    }

    function selectAllProduct(category) {
        var url = 'book/SelectNewBook';
        var child = 5;
        var num = 0;
        if(category!=null){
            url+='?categoryName='+category;
        }else{
            category = 'all';
        }
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                books.map(function (book, index) {
                    if(index<16){
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img').attr('href','#');
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.first__img > img').attr('src',book.firstImage);
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1').attr('href','#');
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__thumb > a.second__img.animation1 > img').attr('src',book.secondImage);
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').attr('href','#');
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > h4 > a').html(book.bookName);
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > ul > li:nth-child(1)').html('$'+book.price);
                        $('#nav-'+category+' > div > div.owl-stage-outer > div > div:nth-child('+child+') > div > div:nth-child('+(index%2+1)+') > div > div.product__content.content--center.content--center > div.action > div > ul > li:nth-child(4) > a').attr('href','#productmodal_'+book.bookID);
                        num = num + 1;
                        if(num==2){
                            child++;
                            num=0;
                        }
                    }

                })
            }
        })
    }




})