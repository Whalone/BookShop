$(function () {

    var bookID = getQueryVariable("bookID");
    console.log(bookID);

    var url = 'book/selectBookByID?bookID='+bookID;
    $.getJSON(url,function (data) {
        if(data.success){
            var book = data.book;
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(2) > div > h1').html(book.bookName);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(2) > div > div.price-box > span').html('$'+book.price);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(2) > div > div:nth-child(5) > p > span').html(book.author);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(2) > div > div:nth-child(6) > p > span').html(book.publishTime);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(2) > div > div.product__overview > p').html(book.information);

            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554111116462 > div > div.fotorama__stage > div.fotorama__stage__shaft > div.fotorama__stage__frame.fotorama__loaded.fotorama__loaded--img.fotorama__active > img').attr('src',book.forthImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554111116462 > div > div.fotorama__stage.fotorama__pointer > div.fotorama__stage__shaft > div:nth-child(2) > img').attr('src',book.fifthImage);

            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554101839201 > div > div.fotorama__nav-wrap > div > div > div.fotorama__nav__frame.fotorama__nav__frame--thumb.fotorama__active > div > img').attr('src',book.forthImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554101839201 > div > div.fotorama__nav-wrap > div > div > div:nth-child(3) > div > img').attr('src',book.fifthImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554101839201 > div > div.fotorama__nav-wrap > div > div > div:nth-child(4) > div > img').attr('src',book.firstImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554101839201 > div > div.fotorama__nav-wrap > div > div > div:nth-child(5) > div > img').attr('src',book.secondImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div.fotorama.wn__fotorama__action.fotorama1554101839201 > div > div.fotorama__nav-wrap > div > div > div:nth-child(6) > div > img').attr('src',book.thirdImage);
        }
    })




    function getQueryVariable(variable) {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return (false);
    }
})