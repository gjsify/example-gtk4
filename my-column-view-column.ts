import Gtk from './@types/Gjs/Gtk-4.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'

import { ColumnViewListStore } from "./widgets/index.js";
import { ColumnElem, _ColumnElem } from "./column-elem.js";
import type { _MyWindow } from "./my-window";

/** Custom ColumnViewColumn */
export class _MyColumnViewColumn extends ColumnViewListStore {

    win?: _MyWindow

    _init(config: Gtk.ColumnViewColumn_ConstructProps = {}, win?: _MyWindow, col_view?: Gtk.ColumnView, data: string[] = []) {
        // Init ListView with store model class.
        super._init(config, ColumnElem, col_view)
        this.win = win

        // put some data into the model
        for (const elem of data) {
            this.add(new ColumnElem(elem))
        }
    }

    /**
     * Gtk.SignalListItemFactory::setup signal callback 
     * Handles the creation widgets to put in the ColumnViewColumn
     * @param widget 
     * @param item 
     */
    factory_setup(widget, item: Gtk.ListItem) {
        const label = new Gtk.Label()
        label.set_halign(Gtk.Align.START)
        label.set_hexpand(true)
        label.set_margin_start(10)
        item.set_child(label)
    }

    /**
     * Gtk.SignalListItemFactory::bind signal callback 
     * Handles adding data for the model to the widgets created in setup
     * @param widget 
     * @param item 
     */
    factory_bind(widget: Gtk.ColumnViewColumn, item: Gtk.ListItem) {
        const label = item.get_child() as Gtk.Label;   // Get the Gtk.Label stored in the ListItem
        const data = item.get_item() as _ColumnElem;   // get the model item, connected to current ListItem
        label?.set_text(data.name)                     // Update Gtk.Label with data from model item
    }

    factory_unbind(widget: Gtk.Widget, item: Gtk.ListItem) {

    }

    factory_teardown(widget: Gtk.Widget, item: Gtk.ListItem) {

    }

    /**
     * trigged when selecting in listview is changed
     * @param widget 
     * @param ndx 
     */
    selection_changed(widget: Gtk.SelectionModel, ndx: number) {
        print("this.store", JSON.stringify(this.store))
        const markup = this.win?.getTextMarkup(
            `Row ${ndx} was selected ( ${this.store?.[ndx]} )`) || ""
        this.win?.page4Label?.set_markup(markup)
    }
}

export const MyColumnViewColumn = GObject.registerClass({
    GTypeName: 'MyColumnViewColumn'
}, _MyColumnViewColumn );
