import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { ColumnViewListStore } from "./widgets/index.js";
import { ColumnElem, IColumnElem } from "./column-elem.js";
import type { IMyWindow } from "./my-window";

/** Custom ColumnViewColumn */
export class IMyColumnViewColumn extends ColumnViewListStore {

    win?: IMyWindow

    constructor(config: Gtk.ColumnViewColumn_ConstructProps = {}, modelCls: typeof ColumnElem, colView: Gtk.ColumnView, data: string[] = [], win: IMyWindow) {
        // Init ListView with store model class.
        super(config, modelCls, colView)
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
    factorySetup(widget, item: Gtk.ListItem) {
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
    factoryBind(widget: Gtk.ColumnViewColumn, item: Gtk.ListItem) {
        const label = item.get_child() as Gtk.Label;   // Get the Gtk.Label stored in the ListItem
        const data = item.get_item() as IColumnElem | null;   // get the model item, connected to current ListItem
        if(data) label?.set_text(data.name)                     // Update Gtk.Label with data from model item
    }

    factoryUnbind(widget: Gtk.Widget, item: Gtk.ListItem) {
    }

    factoryTeardown(widget: Gtk.Widget, item: Gtk.ListItem) {

    }

    /**
     * trigged when selecting in listview is changed
     * @param widget 
     * @param ndx 
     */
    selectionChanged(widget: Gtk.SelectionModel, ndx: number) {
        const markup = this.win?.getTextMarkup(
            `Row ${ndx} was selected ( ${this.store?.get_item(ndx)} )`) || ""
        this.win?.page4Label?.set_markup(markup)
    }
}

export const MyColumnViewColumn = GObject.registerClass({
    GTypeName: 'MyColumnViewColumn',
}, IMyColumnViewColumn );
