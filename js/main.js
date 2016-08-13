setInterval(function(){
    var $elems = $('.slider .el')
    var $active = $('.slider .el.active')
    if(!$active.length) $elems.eq(0).addClass('active');

    $elems.eq(($elems.index($active) + 1) % $elems.length).addClass('active');
    $active.removeClass('active');
}, 12000)

$(document).ready(function () {

    $('#selector').pongstgrm({
        accessId:     '35c6605ef49f44cea200ac967c8f2add',
        accessToken:  '781299033df94a458dec1f3e691b9ae0'
    });

    $('#instagram').pongstgrm({ show: 'recent' });
});

