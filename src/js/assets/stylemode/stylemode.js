/**
 * @author BlackDayz
 * @copyright BlackDayz 2020 - 2021
 * @version 0.0.1
 * @lastupdate 13.01.2021
 */


export function setstyle(mode) {
    if (mode === 'white') {
        document.documentElement.style.setProperty('--bluebackground', '');
        document.documentElement.style.setProperty('--background', '');
        document.documentElement.style.setProperty('--mainfontcolor', '');
    } else if (mode === 'dark') {
        document.documentElement.style.setProperty('--bluebackground', '#19244b');
        document.documentElement.style.setProperty('--background', '#0a0d38');
        document.documentElement.style.setProperty('--mainfontcolor', 'white');
    }
}