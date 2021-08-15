/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { getCookieValue } from "../cookies/cookies.js";
import { setstyle } from "../stylemode/stylemode.js";

export function init() {
    $('.loader').css({
        'transition': 'all .6s',
        'opacity': '0'
    });
    setTimeout(() => {
        $('.loader').css('display', 'none');
        setTimeout(() => {
            $('.loader').remove();
        }, 100);
    }, 600);

    $('#settings_cookies').hide();
    $('#settings_design').hide();

    let darkmode = getCookieValue("darkmode");
    let lastvisit = getCookieValue("lastvisit");
    let geterror = getCookieValue("geterror");
    let getcookies = getCookieValue("getcookies");
    let getstcookies = getCookieValue("getstcookies"); //Statistik
    let getmkorsmcookies = getCookieValue("getmkorsmcookies"); //Marketing / Social Media
    let animationen = getCookieValue("animation");

    $('#darkmode-on-off').prop('checked', darkmode === 'true');
    $('#lastvisit-on-off').prop('checked', lastvisit === 'true'); $('#lastvisit-on-off').prop('disabled', true);
    $('#errormessage-on-off').prop('checked', geterror === 'true');
    $('#cookies-on-off').prop('checked', getcookies === 'true');
    $('#essentiellecookies-on-off').prop('checked', getcookies === 'true'); $('#essentiellecookies-on-off').prop('disabled', true);
    $('#statistischecookies-on-off').prop('checked', getstcookies === 'true');
    $('#mworsmcookies-on-off').prop('checked', getmkorsmcookies === 'true');
    $('#animations-on-off').prop('checked', animationen === 'true');

    if (getCookieValue('darkmode') == 'true') {
        setstyle('dark');
    }
    

    window.location.hash = "";

    // if (getCookieValue('lastvisit') === 'true') { lastvisitf('', 'load'); }

}