import Gio from '../../@types/Gjs/Gio-2.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'

import { ListViewBase } from "./list-view-base.js"
import { IListElem } from "../list-elem.js"

// TODO: see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js

/**
 * ListView base with an Gio.ListStore as data model
 * It can contain misc objects derived from GObject
 */
export class IListViewListStore extends ListViewBase {
    constructor({}, modelCls: typeof IListElem) {
        super({}, modelCls)
    }

    /** Setup the data model */
    setupStore(modelCls: typeof IListElem): Gio.ListStore {
        return new Gio.ListStore({item_type: modelCls.$gtype})
    }
}

export const ListViewListStore = GObject.registerClass({
    GTypeName: 'ListViewListStore'
}, IListViewListStore );