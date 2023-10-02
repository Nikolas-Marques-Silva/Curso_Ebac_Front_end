$(document).ready(function() {
    $('#carousel').slick({ autoplay: true });
    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(1000)
    });
});