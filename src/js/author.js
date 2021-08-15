/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { getCookieValue } from "./assets/cookies/cookies.js";


$(document).ready(function () {
    var autorinnen = $('.author_pics div').length;

    for (var i = 1; i <= autorinnen; i++) {
        $('.author_pics .at_' + i).click(function () {
            var lastClass = $(this).attr('class').split(' ').pop();

            if (getCookieValue('animation') === 'true') {
                $('.author_pics div').removeClass('atactive');
                $('.autorinnen_sec div').removeClass('at_show animate__animated animate__fadeInRightBig animate__faster');
                $('.autorinnen_sec .' + lastClass).addClass('at_show animate__animated animate__fadeInRightBig animate__faster');
                setTimeout(() => {
                    $('.autorinnen_sec .' + lastClass).removeClass('animate__animated animate__fadeInRightBig animate__faster');
                }, 800);
            } else {
                $('.author_pics div').removeClass('atactive');
                $('.autorinnen_sec div').removeClass('at_show');
                $('.autorinnen_sec .' + lastClass).addClass('at_show')
            }

            $(this).addClass('atactive');
        });
    }
});
