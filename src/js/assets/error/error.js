/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { getCookieValue } from "../cookies/cookies.js";

export function errormessage(message) {
    if (getCookieValue('geterror') === 'true' && getCookieValue('getcookies') === 'true') {
        $('#error').css('top', '0');
        $('#errormessage').html(message);

        setTimeout(() => {
            $('#error').css('top', '-200px');
        }, 5000);


    } else {
        console.error(message);
    }
}
