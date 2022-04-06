import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { SelectorBase } from "./selector-base.js";

/** Vertical Selector Widget that contains a number of strings where one can be selected */
export class ITextSelector extends SelectorBase {

    /** Add a named row to the selector with at given icon name */
    override addRow(name: string, markup: string) {
        // get the image
        const label = new Gtk.Label()
        label.set_markup(markup)
        // set the widget size request to 32x32 px, so we get some margins
        // label.set_size_request(100, 24)
        label.set_single_line_mode(true)
        label.set_halign(Gtk.Align.START)
        label.set_hexpand(true)
        label.set_xalign(0)
        label.set_margin_start(5)
        label.set_margin_end(10)
        this.append(label)
        // store the index names, so we can find it on selection
        this._rows[this.ndx] = name
        this.ndx += 1
    }
}

export const TextSelector = GObject.registerClass({
    GTypeName: 'TextSelector'
}, ITextSelector );