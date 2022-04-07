import Gio from '../../@types/Gjs/Gio-2.0.js'
import Gtk from '../../@types/Gjs/Gtk-4.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'

import { APP_MENU } from "../constants.js";

/**
 * Wrapper class for at Gtk.Menubutton with a menu defined
 * in a Gtk.Builder xml string
 */
export class IMenuButton extends Gtk.MenuButton {

    constructor(config: Gtk.MenuButton_ConstructProps = {}) {
        super(config)
        const xml = APP_MENU;
        const name = 'app-menu';
        const icon_name = 'open-menu-symbolic';

        const builder = new Gtk.Builder();
        builder.add_from_string(xml, xml.length)
        const menu = builder.get_object(name) as Gio.MenuModel; // TODO: ts-for-gir: Use Generics here
        this.set_menu_model(menu);
        this.set_icon_name(icon_name);
    }
}

export const MenuButton = GObject.registerClass({
    GTypeName: 'MenuButton'
}, IMenuButton );
