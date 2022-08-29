

$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function () { scroll(0, 0) });

    $('.menu-toggler').click(function () {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(".works").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
    });
});




window.addEventListener(load, start, false);
function start() {
    document.getElementsByClassName("navbar").addEventListener(scrollY, sticky, false);
}

function sticky(e) {
    if (scrollY > 20) {
        document.getElementsByClassName("navbar").addClass("sticky");
    }
}