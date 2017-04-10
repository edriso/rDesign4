/*global $, jQuery, alert*/
$(function () {
    'use strict';
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".navbar").height()) {
            if (!$(".navbar").hasClass("scrolled")) {
                $(".navbar").addClass("scrolled");
            }
        } else {
            $(".navbar").removeClass("scrolled");
        }
    });
    
    // Nice Scroll
    $("html").niceScroll({
        cursorwidth: "10px",
        cursorborder: "none",
        cursorcolor: "#333"
    });
});