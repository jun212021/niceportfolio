$('folioLink').mouseover(function () {
    $('folioLink').not($(this)).addClass('hover');
});

$('folioLink').mouseout(function () {
    $('folioLink').not($(this)).removeClass('hover');
});
