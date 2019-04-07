$(function () {

    $('#submit').click(function () {
        var url = 'customer/findCustomerByName';
        var msg='';


        userName = $('#userName').val();
        password = $('#password').val();


        $.ajax({
            url:url,
            type:'POST',
            data:{
                userName:userName,
                password:password
            },
            dataType:'json',
            success:function (data) {
                console.log('data');
                if(data.success){
                    window.location.href = 'index.html';
                }else{

                    $('.help-block').html(data.msg);
                    return false;
                }
            }

        });



    })


})