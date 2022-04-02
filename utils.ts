import Polkit from './@types/Gjs/Polkit-1.0.js'

export const isInt = (n: Number) => {
    return !Number.isNaN(n) && Number.isInteger(n);
}

export const isFloat = (n: Number) => {
    return !Number.isNaN(n) && !Number.isInteger(n);
}

export const toHex = (c: number) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

export const rgb_to_hex = (r: number, g: number, b: number) => {
    if (isFloat(r)) {
        r *= 255
        g *= 255
        b *= 255
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export const color_to_hex = (color) => {
    return rgb_to_hex(color.red, color.green, color.blue)
}

export const get_font_markup = (fontDesc: string, text: string) => {
    return `<span font_desc="${fontDesc}">${text}</span>`
}

export const range = (end: number) => {
    const result: number[] = [];
    for (let i = 0; i < end; i++) {
        result.push(i)
    }
    return result;
}

/**
 * Get an GPermission object from PolKit to use with Gtk.LockButton
 * @param action_id is just an example there exist on at Fedora 34 workstation
 * @returns 
 */
export const getPermission = (action_id='org.freedesktop.accounts.user-administration') => {
    const prem = Polkit.Permission.new_sync(action_id, null, null)
    // print(prem.acquire())
    return prem
}