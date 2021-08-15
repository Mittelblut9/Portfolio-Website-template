/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { errormessage } from "./assets/error/error.js";
import { getCookieValue, checkcookie, firstvisit } from "./assets/cookies/cookies.js";
import { changesettings } from "./assets/settings/settings.js";
import { init } from './assets/init/init.js';
import { setstyle } from "./assets/stylemode/stylemode.js";

var firstvisitcookie = getCookieValue("firstvisit");


var darkmodeswitch = $('#darkmode-on-off');
var lastvisitswitch = $('#lastvisit-on-off');
var errorstswitch = $('#errormessage-on-off');
var cookiesswitch = $('#cookies-on-off')
var nwcookiesswitch = $('#essentiellecookies-on-off');
var stcookiesswitch = $('#statistischecookies-on-off');
var mkorsmcookiesswitch = $('#mworsmcookies-on-off');
var animationswitch = $('#animations-on-off');



$(document).ready(() => {
    if (firstvisitcookie == '') firstvisit(); else { checkcookie(); }

    init();

    $(errorstswitch).click(() => { changesettings("geterror") });
    $(cookiesswitch).click(() => { changesettings("getcookies"); if (getCookieValue('getcookies') === 'true') { $(nwcookiesswitch).prop('checked', true) } else { $(nwcookiesswitch).prop('checked', false); changesettings("getnwcookies"); } });


    $(darkmodeswitch).click(() => {
        if (getCookieValue('getcookies') === 'true') {
            changesettings("darkmode");
            if ($('#darkmode-on-off:checked').val() === 'on') {
                setstyle('dark');
            }else {
                setstyle('white');
            }
        } else {
            errormessage("Cookies sind nicht aktzeptiert");
            $(darkmodeswitch).prop('checked', false);
        }
    });

    $(animationswitch).click(() => {
        if (getCookieValue('getcookies') === 'true') {
            changesettings("animation");
        } else {
            errormessage("Cookies sind nicht aktzeptiert");
            $(animationswitch).prop('checked', false);
        }
    });

    $(stcookiesswitch).click(() => {
        if (getCookieValue('getcookies') === 'true') {
            changesettings("getstcookies");
        } else {
            errormessage("Cookies sind nicht aktzeptiert");
            $(stcookiesswitch).prop('checked', false);
        }
    });
    $(mkorsmcookiesswitch).click(() => {
        if (getCookieValue('getcookies') === 'true') {
            changesettings("getmkorsmcookies");
        } else {
            errormessage("Cookies sind nicht aktzeptiert");
            $(mkorsmcookiesswitch).prop('checked', false);
        }
    });


    /**
     * CLICK EVENTS 
     */


    $('#st-allgemein').click(() => {
        $('#settings_allgemein').show();
        $('#settings_name span').html($('#st-allgemein').text());
        $('#settings_cookies').hide();
        $('#settings_design').hide();
    });
    $('#st-cookies').click(() => {
        $('#settings_allgemein').hide();
        $('#settings_design').hide();
        $('#settings_name span').html($('#st-cookies').text());
        $('#settings_cookies').show();
    });
    $('#design-cookies').click(() => {
        $('#settings_allgemein').hide();
        $('#settings_cookies').hide();
        $('#settings_name span').html($('#design-cookies').text());
        $('#settings_design').show();
    });

    /**
    * HANDBUCH SITES
    */

    var handbuch_sites = ['1', '2', '3', '4']

    var current_site = handbuch_sites[0];
    $('.moveback').click(function (e) {
        if (current_site == '1') {
            errormessage('Weiter zur&uuml;ck geht es nicht!');
        } else {
            current_site--;
            showsite(current_site, 'back');
            window.location.hash = "site-" + current_site;
            e.preventDefault();
        }
    });

    $('.moveforward').click(function (e) {
        if (current_site == handbuch_sites.length) {
            errormessage('Du hast die maximal Anzahl an Seiten erreicht');
        } else {
            current_site++;
            showsite(current_site, 'forw');

            window.location.hash = "site-" + current_site;
            e.preventDefault();
        }
    });


    function showsite(siteindex, direction) {
        if (getCookieValue('animation') === 'true') {
            let lastindex = siteindex;
            if (direction === 'forw') {
                lastindex -= 1;
            } else if (direction === 'back') {
                lastindex += 1;
            }

            $('.site-' + lastindex).addClass('animate__animated animate__fadeOutDown animate__faster');
            setTimeout(() => {
                $('.site-' + lastindex).removeClass('animate__animated animate__fadeOutDown');
                $('.site').hide();

                $('.site-' + siteindex).addClass('animate__animated animate__fadeInUp animate__faster');
                setTimeout(() => {
                    $('.site-' + siteindex).removeClass('animate__animated animate__fadeInUp');
                }, 500);
                $('.site-' + siteindex).show();
            }, 1000);

        } else {
            direction = null;
            $('.site').hide();
            $('.site-' + siteindex).show();
        }

    }
});


/**
 *  NAV TOP
 */

$('#burgermenu').change(function (e) {
    if ($('#burgermenu:checked').val() === 'on') {
        $('.mainnav').css('height', '400px');
        $('.mainnav a').css('display', 'grid');
        setTimeout(() => {
            $('.mainnav a').css('opacity', '1');
        }, 300);
    } else {
        $('.mainnav').css('height', '');
        $('.mainnav a').css('opacity', '0');
        setTimeout(() => {
            $('.mainnav a').hide()
        }, 300);
    }
    e.preventDefault();
});

/**
 *
 */


/**
 *  SECOND NAV
 */

$('.secondnav span:first-child').click(() => {
    if ($('.secondnav').hasClass('secondnavactive')) {
        $('.secondnav').removeClass('secondnavactive');
    } else {
        $('.secondnav').addClass('secondnavactive');
    }
});

$('.wrapper').click(() => {
    $('.secondnav').removeClass('secondnavactive');
});

/**
 *
 */




