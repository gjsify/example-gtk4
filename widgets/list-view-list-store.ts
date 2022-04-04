import Gio from '../@types/Gjs/Gio-2.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { ListViewBase } from "./list-view-base.js"
import { ListElem } from "../list-elem.js"

// TODO: see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js

/**
 * ListView base with an Gio.ListStore as data model
 * It can contain misc objects derived from GObject
 */
export class _ListViewListStore extends ListViewBase {
    _init({}, model_cls: any /* TODO */) {
        super._init({}, model_cls)
    }

    /** Setup the data model */
    setup_store(model_cls: any /* TODO */): Gio.ListStore {
        print("setup_store model_cls: ", model_cls)
        return new Gio.ListStore({item_type: model_cls})
    }
}

export const ListViewListStore = GObject.registerClass({
    GTypeName: 'ListViewListStore'
}, _ListViewListStore );