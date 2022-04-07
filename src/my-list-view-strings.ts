import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'
import { ListViewStrings }from './widgets/index.js'
import { range }from './utils.js'
import type { IMyWindow } from "./my-window.js";


/** Custom ListView */
export class IMyListViewStrings extends ListViewStrings {

    constructor(readonly win: IMyWindow) {
        // Init ListView with store model class.
        super({})
        this.win = win
        this.set_vexpand(true)
        // put some data into the model
        for (const i of range(1000)) {
            this.add(`Item ${i}`)
        }
    }

    /**
     * Gtk.SignalListItemFactory::setup signal callback (overloaded from parent class)
     * Handles the creation widgets to put in the ListView
     * @param widget 
     * @param item 
     */
    factory_setup(widget: Gtk.ListView, item: Gtk.ListItem) {
        const label = new Gtk.Label()
        label.set_halign(Gtk.Align.START)
        label.set_hexpand(true)
        label.set_margin_start(10)
        item.set_child(label)
    }

    /**
     * Gtk.SignalListItemFactory::bind signal callback (overloaded from parent class)
     * Handles adding data for the model to the widgets created in setup
     */
    factory_bind(widget: Gtk.ListView, item: Gtk.ListItem) {
        // get the Gtk.Label
        const label = item.get_child() as Gtk.Label
        // get the model item, connected to current ListItem
        const data = item.get_item()
        // Update Gtk.Label with data from model item
        label.set_text((data as any).get_string()) // TODO
        // Update Gtk.Switch with data from model item
        item.set_child(label)
    }

    /**
     * trigged when selecting in listview is changed
     * @param widget 
     * @param ndx 
     */
    selection_changed(widget, ndx: number) {
        const markup = this.win.getTextMarkup(
            `Row {ndx} was selected ( ${this.store?.get_item(ndx)/*?.get_string()*/} )`)
        this.win.page4Label?.set_markup(markup)
    }
}

export const MyListViewStrings = GObject.registerClass({
    GTypeName: 'MyListViewStrings'
}, IMyListViewStrings );