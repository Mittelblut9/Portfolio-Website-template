/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */

import { getCookieValue, setcookie, checkcookie } from "../cookies/cookies.js";
import { errormessage } from '../error/error.js';

export function changesettings(cookie) {
    if (getCookieValue('getcookies') === 'true' || cookie === 'getcookies' || cookie === 'getnwcookies') {
        var before = getCookieValue(cookie);
        let cookieval = getCookieValue(cookie);
        if (cookieval === 'true') {
            setcookie(cookie, 'false');
            $(this).val('checked', false);
        }
        else if (cookieval === 'false') {
            setcookie(cookie, 'true');
            $(this).val('checked', true);
        }

        if (getCookieValue(cookie) === before) {
            try {
                setcookie(cookie, true)
            } catch {
                errormessage("Ein Fehler ist augetreten! Versuche es erneut oder kontaktiere den Administrator");
            }

        }
    } else {
        errormessage("Cookies sind nicht aktiviert");
        checkcookie();
    }
}
