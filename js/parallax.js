function isMobile () {
    return navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i) ? !0 : !1
};
if (!isMobile()) {
    $(window).scroll(function () {
        Foundation.utils.S('.parallax').css("webkitTransform", "translate(0, " + $(window).scrollTop() * 0.6 + "px)"),
        Foundation.utils.S('.topbar-wide-bg').css("webkitTransform", "translate(0, -" + $(window).scrollTop() * 0.2 + "px)");
    });
};