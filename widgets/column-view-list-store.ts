import Gio from '../@types/Gjs/Gio-2.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'
import Gtk from '../@types/Gjs/Gtk-4.0.js'

import { ViewColumnBase } from "./view-column-base.js";
import { ColumnElem } from "../column-elem.js"

// TODO: see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js

/**
 * ColumnViewColumn base with an Gio.ListStore as data model
 * It can contain misc objects derived from GObject
 **/
export class _ColumnViewListStore extends ViewColumnBase {

    constructor(config: Gtk.ColumnViewColumn_ConstructProps = {}, model_cls: any, col_view) {
        super(config, model_cls, col_view)
    }

    /** Setup the data model */
    setup_store(model_cls: any /* TODO */): Gio.ListStore {
        // print("setup_store model_cls: ", model_cls)
        return new Gio.ListStore({item_type: model_cls})
    }
}

export const ColumnViewListStore = GObject.registerClass({
    GTypeName: 'ColumnViewListStore',
}, _ColumnViewListStore );