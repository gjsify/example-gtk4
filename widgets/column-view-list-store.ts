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
export class IColumnViewListStore extends ViewColumnBase {

    constructor(config: Gtk.ColumnViewColumn_ConstructProps = {}, modelCls: typeof ColumnElem, colView: Gtk.ColumnView) {
        super(config, modelCls, colView)
    }

    /** Setup the data model */
    setupStore(modelCls: typeof ColumnElem): Gio.ListStore {
        return new Gio.ListStore({item_type: modelCls.$gtype})
    }
}

export const ColumnViewListStore = GObject.registerClass({
    GTypeName: 'ColumnViewListStore',
}, IColumnViewListStore );