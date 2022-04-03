import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { SelectorBase } from "./selector-base.js";

/** Vertical Selector Widget that contains a number of icons where one can be selected */
export class _IconSelector extends SelectorBase {

    /** Add a named row to the selector with at given icon name */
    override addRow(name: string, icon_name: string) {
        // get the image
        const pix = Gtk.Image.new_from_icon_name(icon_name)
        // set the widget size request to 32x32 px, so we get some margins
        pix.set_size_request(32, 32)
        this.append(pix)
        // store the index names, so we can find it on selection
        this._rows[this.ndx] = name
        this.ndx += 1
    }
}

export const IconSelector = GObject.registerClass({
    GTypeName: 'IconSelector'
}, _IconSelector );