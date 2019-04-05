$(function () {


    listBookList(null,0,6);
    gridBookList(null,0,12);

    function listBookList(category,pageIndex,pageSize) {
        var viewHtml = '';
        var url = 'book/selectBookList?pageIndex='+pageIndex+'&pageSize='+pageSize;
        if(category!=null){
            url = url+'&'+category;
        }
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                books.map(function (book, index) {
                    viewHtml += ''+
                        '<div class="list__view mt--40">\n' +
                        '\t        \t\t\t\t\t\t\t<div class="thumb">\n' +
                        '\t        \t\t\t\t\t\t\t\t<a class="first__img" href="single-product.html"><img src="'+book.thirdImage+'" alt="product images"></a>\n' +
                        '\t        \t\t\t\t\t\t\t\t<a class="second__img animation1" href="single-product.html"><img src="'+book.forthImage+'" alt="product images"></a></a>\n' +
                        '\t        \t\t\t\t\t\t\t</div>\n' +
                        '\t        \t\t\t\t\t\t\t<div class="content">\n' +
                        '\t        \t\t\t\t\t\t\t\t<h2><a href="single-product.html">'+book.bookName+'</a></h2>\n' +
                        '\t        \t\t\t\t\t\t\t\t<ul class="rating d-flex">\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li><i class="fa fa-star-o"></i></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t</ul>\n' +
                        '\t        \t\t\t\t\t\t\t\t<ul class="prize__box">\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li>$'+book.price+'.00</li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="old__prize">$220.00</li>\n' +
                        '\t        \t\t\t\t\t\t\t\t</ul>\n' +
                        '\t        \t\t\t\t\t\t\t\t<p>'+book.information+'</p>\n' +
                        '\t        \t\t\t\t\t\t\t\t<ul class="cart__action d-flex">\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="cart"><a href="#">Add to cart</a></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="wishlist"><a href="#"></a></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t\t<li class="compare"><a href="#"></a></li>\n' +
                        '\t        \t\t\t\t\t\t\t\t</ul>\n' +
                        '\n' +
                        '\t        \t\t\t\t\t\t\t</div>\n' +
                        '\t        \t\t\t\t\t\t</div>'

                })
            }

            $('#nav-list > div').html(viewHtml);
        })
    }

    function gridBookList(category,pageIndex,pageSize){
        var viewHtml = '';
        var url = 'book/selectBookList?pageIndex='+pageIndex+'&pageSize='+pageSize;
        if(category!=null){
            url = url+'&'+category;
        }
        $.getJSON(url,function (data) {
            if(data.success){
                var books = data.books;
                books.map(function (book, index) {
                    viewHtml += ''+
                        '<div class="col-lg-4 col-md-4 col-sm-6 col-12">\n' +
                        '\t\t\t        \t\t\t\t\t<div class="product">\n' +
                        '\t\t\t        \t\t\t\t\t\t<div class="product__thumb">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<a class="first__img" href="single-product.html"><img src="'+book.thirdImage+'" alt="product image"></a>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<a class="second__img animation1" href="single-product.html"><img src="'+book.forthImage+'" alt="product image"></a>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<div class="new__box">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<span class="new-label">Hot</span>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<ul class="prize position__right__bottom d-flex">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li>$'+book.price+'.00</li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li class="old_prize">$55.00</li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t</ul>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<div class="action">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<div class="actions_inner">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t<ul class="add_to_links">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t\t<li><a class="cart" href="#"></a></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t\t<li><a class="wishlist" href="#"></a></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t\t<li><a class="compare" href="compare.html"></a></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t\t<li><a data-toggle="modal" title="Quick View" class="quickview modal-view detail-link" href="#productmodal"></a></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t\t</ul>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t</div>\n' +
                        '\t\t\t        \t\t\t\t\t\t</div>\n' +
                        '\t\t\t        \t\t\t\t\t\t<div class="product__content">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<h4><a href="single-product.html?bookID='+book.bookID+'">'+book.bookName+'</a></h4>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t<ul class="rating d-flex">\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li class="on"><i class="fa fa-star-o"></i></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li><i class="fa fa-star-o"></i></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t\t<li><i class="fa fa-star-o"></i></li>\n' +
                        '\t\t\t        \t\t\t\t\t\t\t</ul>\n' +
                        '\t\t\t        \t\t\t\t\t\t</div>\n' +
                        '\t\t\t        \t\t\t\t\t</div>\n' +
                        '\t\t        \t\t\t\t\t</div>';
                });
                $('#nav-grid > div').html(viewHtml);
            }
        })
    }

    /*function test111() {
        alert("1111");
    }*/
    
    listPageIndex = function (num) {
        listBookList(null,num,6);
        $('#nav-list > ul > li:nth-child(1)').removeAttr('class');
        $('#nav-list > ul > li:nth-child(2)').removeAttr('class');
        $('#nav-list > ul > li:nth-child(3)').removeAttr('class');
        $('#nav-list > ul > li:nth-child(4)').removeAttr('class');

        $('#nav-list > ul > li:nth-child('+num+')').attr('class','active');
    };

    wrapPageIndex = function (num) {
        gridBookList(null,num,12);
        $('#nav-grid > ul > li:nth-child(1)').removeAttr('class');
        $('#nav-grid > ul > li:nth-child(2)').removeAttr('class');
        $('#nav-grid > ul > li:nth-child(3)').removeAttr('class');
        $('#nav-grid > ul > li:nth-child(4)').removeAttr('class');

        $('#nav-grid > ul > li:nth-child('+num+')').attr('class','active');
    };


})