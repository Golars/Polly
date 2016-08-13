setInterval(function(){
    var $elems = $('.slider .el')
    var $active = $('.slider .el.active')
    if(!$active.length) $elems.eq(0).addClass('active');

    $elems.eq(($elems.index($active) + 1) % $elems.length).addClass('active');
    $active.removeClass('active');
}, 12000)

var masonry;
imagesLoaded($('body'), function() {
    masonry = new Masonry($('#pictures')[0], {
        itemSelector: '.el',
        animate: true,
        percentPosition: true,
        isFitWidth: true,
        stamp: '.stamp'
    })
});
