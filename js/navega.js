$(document).ready(function () {

    $('#menu li').click(function () {
        let url = 'pages/'+($(this).html())+'.html';


        //AJAX
        $.ajax({
            url: url,
            method: 'GET'
        })
            .done(function (response) {
                $('#conteudoAjax').html(response);
            });


        //LOAD
        $('#conteudoLoad').load(url);
    });

});