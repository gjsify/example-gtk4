import Gtk from './@types/Gjs/Gtk-4.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'

import { ListViewListStore } from './widgets/list-view-list-store.js';
import { ListElem, _ListElem } from "./list-elem.js";
import { NotImplemented } from "./constants.js";
import type { _MyWindow } from "./my-window.js";

/** Custom ListView */
export class _MyListView extends ListViewListStore {

    win?: _MyWindow

    _init({}, win?: _MyWindow) {
        // Init ListView with store model class.
        super._init({}, ListElem)
        this.win = win
        this.set_valign(Gtk.Align.FILL)

        // this.set_vexpand(true)
        // put some data into the model
        this.add(new ListElem("One", true))
        this.add(new ListElem("Two", false))
        this.add(new ListElem("Three", true))
        this.add(new ListElem("Four", false))
    }

    /**
     * Gtk.SignalListItemFactory::setup signal callback (overloaded from parent class)
     * Handles the creation widgets to put in the ListView
     */
    factory_setup(widget: Gtk.ListView, item: Gtk.ListItem) {
        const box = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL})
        const label = new Gtk.Label()
        label.set_halign(Gtk.Align.START)
        label.set_hexpand(true)
        label.set_margin_start(10)
        const _switch = new Gtk.Switch()
        _switch.set_halign(Gtk.Align.END)
        _switch.set_margin_end(10)
        box.append(label)
        box.append(_switch)
        item.set_child(box)
    }

    /**
     * Gtk.SignalListItemFactory::bind signal callback (overloaded from parent class)
     * Handles adding data for the model to the widgets created in setup
     * @param widget 
     * @param item 
     */
    factory_bind(widget: Gtk.ListView, item: Gtk.ListItem) {
        // get the Gtk.Box stored in the ListItem
        const box = item.get_child()
        // get the model item, connected to current ListItem
        const data = item.get_item() as _ListElem
        // get the Gtk.Label (first item in box)
        const label = box?.get_first_child() as Gtk.Label
        // get the Gtk.Switch (next sibling to the Label)
        const _switch = label?.get_next_sibling() as Gtk.Switch
        // Update Gtk.Label with data from model item
        label?.set_text(data.name || "")
        // Update Gtk.Switch with data from model item
        _switch.set_state(false) // 'TODO: data.state'
        // connect switch to handler, so we can handle changes
        // TODO: _switch?.connect('state-set', this.switch_changed.bind(this), item.get_position())
        item.set_child(box)
    }

    /**
     * Gtk.SignalListItemFactory::unbind signal callback (overloaded from parent class)
     * @abstract
     * @param widget 
     * @param item 
     */
    factory_unbind(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * Gtk.SignalListItemFactory::teardown signal callback (overloaded from parent class
     * @abstract
     * @param widget 
     * @param item 
     */
    factory_teardown(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * Trigged when selecting in listview is changed
     * @param widget 
     * @param ndx 
     */
    selection_changed(widget: Gtk.SelectionModel, ndx: number) {
        const markup = this.win?.getTextMarkup(
            `Row ${ndx} was selected ( ${this.store?.[ndx]} )`) || ""
        this.win?.page4Label?.set_markup(markup)
    }

    switch_changed(widget, state: boolean, pos: number) {
        // update the data model, with current state
        const elem = this.store?.[pos]
        elem.state = state
        const markup = this.win?.getTextMarkup(`switch in row ${pos}, changed to ${state}`) || ""
        this.win?.page4Label?.set_markup(markup)
    }
}

export const MyListView = GObject.registerClass({
    GTypeName: 'MyListView'
}, _MyListView );