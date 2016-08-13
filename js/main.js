setInterval(function(){
    var $elems = $('.slider .el')
    var $active = $('.slider .el.active')
    if(!$active.length) $elems.eq(0).addClass('active');

    $elems.eq(($elems.index($active) + 1) % $elems.length).addClass('active');
    $active.removeClass('active');
}, 12000)

$(document).ready(function(){

    $('#recent').pongstgrm({
        accessId:     '35c6605ef49f44cea200ac967c8f2add',
        accessToken:  '781299033df94a458dec1f3e691b9ae0',
        show: 'recent', // 'recent', 'feed', 'liked', 'user'
        count : 8, // 1(min) - 40(max), instagram limits the maximum number of photos to 40
        pager : true // true or false (enables/disable load more button)
    });

});
