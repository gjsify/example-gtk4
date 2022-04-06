import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { NotImplemented } from "../constants.js"

/** Selector base class */
export class _SelectorBase extends Gtk.ListBox {

    public _rows: { [i: number]: string } = {};

    public ndx: number = 0;

    callback: null | ((name: string) => void) = null;

    constructor() {
        super()
        this._rows = {};
        this.callback = null;
        // Setup the list box
        this.set_selection_mode(Gtk.SelectionMode.SINGLE)
        this.connect('row-selected', this.onRowChanges.bind(this))
    }

    /**
     * Overload this in a subclass
     * @abstract
     * @param name 
     * @param markup 
     */
    addRow(name: string, markup: string) {
        throw NotImplemented;
    }

    onRowChanges(widget: Gtk.ListBox, row: Gtk.ListBoxRow | null) {
        const ndx = row?.get_index() || 0;
        if (this.callback) {
            this.callback(this._rows[ndx])
        } else {
            print(`Row Selected : ${this._rows[ndx]}`, JSON.stringify(this._rows))
        }
    }

    setCallback(callback) {
        this.callback = callback
    }
}

export const SelectorBase = GObject.registerClass({
    GTypeName: 'SelectorBase',
    Properties: {
        'ndx': GObject.ParamSpec.double(
            'ndx',
            'Index',
            'Icon row index',
            GObject.ParamFlags.READWRITE,
            Number.MIN_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER,
            0
        ),
    }
}, _SelectorBase );