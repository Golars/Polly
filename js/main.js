setInterval(function(){
    var $elems = $('.slider .el')
    var $active = $('.slider .el.active')
    if(!$active.length) $elems.eq(0).addClass('active');

    $elems.eq(($elems.index($active) + 1) % $elems.length).addClass('active');
    $active.removeClass('active');
}, 12000)
