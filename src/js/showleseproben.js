/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { getCookieValue } from "./assets/cookies/cookies.js";


$(document).ready(() => {
    var pdf_leseproben = $('.leseproben_iframes iframe').length;
    $('.leseproben_iframes iframe').hide();

    for (var i = 0; i <= pdf_leseproben; i++) {
        $('.' + i).click(function () {
            let parentclass = $(this).parent().get(0).className;

            if (parentclass == 'info_text leseproben_links') {
                if (getCookieValue('animation') === 'true') {
                    $('.leseproben_iframes iframe').hide("slow");
                    $('.leseproben_iframes .' + this.className).show("slow");
                } else {
                    $('.leseproben_iframes iframe').hide();
                    $('.leseproben_iframes .' + this.className).show();
                }
            }
            else if (parentclass == 'info_text more_leseproben_links') {
                if (getCookieValue('animation') === 'true') {
                    $('.more_leseproben_txt div').hide("slow");
                    $('.more_leseproben_txt .' + this.className).show("slow");
                } else {
                    $('.more_leseproben_txt div').hide();
                    $('.more_leseproben_txt .' + this.className).show();
                }
            }
            $('.leseproben_links p, .more_leseproben_links p').removeAttr('id');
            $(this).attr('id', 'handbuch_leseproben_active');
        });
    }
});


function init() {
    $('.leseproben_links .1').attr('id', 'handbuch_leseproben_active');;
}