import Gio from '../../@types/Gjs/Gio-2.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'
import Gtk from '../../@types/Gjs/Gtk-4.0.js'

import { ListViewBase } from "./list-view-base.js"


/**
 * Add ListView with only strings 
 */
export class IListViewStrings extends ListViewBase {

    constructor(config: Gtk.ListView_ConstructProps) {
        super(config, Gtk.StringObject as any) // TODO
    }

    /**
     * Setup the data model
     * Can be overloaded in subclass to use another Gio.ListModel
     */
    setupStore(model_cl: typeof GObject.Object): Gio.ListModel {
        return new Gtk.StringList()
    }
}

export const ListViewStrings = GObject.registerClass({
    GTypeName: 'ListViewStrings'
}, IListViewStrings );
