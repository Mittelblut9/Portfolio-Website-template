/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { errormessage } from "../error/error.js";

export function getCookieValue(a) {
    const b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


export function setcookie(cookiename, value) {
    let before = getCookieValue(cookiename);

    var a = new Date();
    a = new Date(a.getTime() + 1000 * 60 * 60 * 24 * 365); // Valid for 1 year
    document.cookie = cookiename + '=' + value + ';expires=' +
        a.toGMTString() + ';';

    if (getCookieValue(cookiename) === before) {
        errormessage("'" + cookiename + "' konnte nicht gespeichert werden")
    }
}


export function checkcookie() {
    if (getCookieValue("firstvisit") == '') {
        $('#darkmode-on-off').prop('checked', getCookieValue('darkmode') === 'true'); $('#darkmode-on-off').prop('disabled', true);
        $('#lastvisit-on-off').prop('checked', getCookieValue('lastvisit') === 'true'); $('#lastvisit-on-off').prop('disabled', true);
        $('#errormessage-on-off').prop('checked', getCookieValue('geterror') === 'true'); $('#errormessage-on-off').prop('disabled', true);
        $('#errormessage-on-off').prop('checked', getCookieValue('getcookies') === 'true'); $('#errormessage-on-off').prop('disabled', false);
        $('#essentiellecookies-on-off').prop('checked', getCookieValue('getnwcookies') === 'true'); $('#essentiellecookies-on-off').prop('disabled', true);
        $('#statistischecookies-on-off').prop('checked', getCookieValue('getstcookies') === 'true'); $('#statistischecookies-on-off').prop('disabled', true);
        $('#mworsmcookies-on-off').prop('checked', getCookieValue('getmkorsmcookies') === 'true'); $('#mworsmcookies-on-off').prop('disabled', true);
        $('#animations-on-off').prop('checked', getCookieValue('animation') === 'true'); $('#animations-on-off').prop('disabled', true);
        errormessage(" Sie haben Cookies blockiert. Keine Einstellung kann gespeichert werden");
    }
}


export function firstvisit() {
    setcookie('darkmode', 'false');
    setcookie('lastvisit', 'false');
    setcookie('geterror', 'true');
    setcookie('getcookies', 'true');
    setcookie('getnwcookies', 'true');
    setcookie('getstcookies', 'false');
    setcookie('getmkorsmcookies', 'false');
    setcookie('firstvisit', 'true');
    setcookie('animation', 'true');
}

