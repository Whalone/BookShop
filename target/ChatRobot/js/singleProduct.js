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

            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div > a:nth-child(1) > img').attr('src',book.thirdImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div > a:nth-child(2) > img').attr('src',book.forthImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div > a:nth-child(3) > img').attr('src',book.firstImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div > a:nth-child(4) > img').attr('src',book.secondImage);
            $('#wrapper > div.maincontent.bg--white.pt--80.pb--55 > div > div > div.col-lg-9.col-12 > div.wn__single__product > div > div:nth-child(1) > div > div > a:nth-child(5) > img').attr('src',book.fifthImage);
        }
    })

    var script1 = document.createElement('script');
    var script2 = document.createElement('script');
    var script3 = document.createElement('script');
    var script4 = document.createElement('script');
    var script5 = document.createElement('script');

    script1.src='js/vendor/modernizr-3.5.0.min.js';
    script2.src='js/popper.min.js';
    script3.src='js/bootstrap.min.js';
    script4.src='js/plugins.js';
    script5.src='js/active.js';


    document.body.appendChild(script1);
    document.body.appendChild(script2);
    document.body.appendChild(script3);
    document.body.appendChild(script4);
    document.body.appendChild(script5);




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