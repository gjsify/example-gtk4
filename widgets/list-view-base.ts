import Gio from '../@types/Gjs/Gio-2.0.js'
import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { NotImplemented } from '../constants.js'
import { ListElem } from '../list-elem.js';

// TODO: see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js

/**
 * ListView base class, it setup the basic factory, selection model & data model
 * handlers must be overloaded & implemented in a sub class
 */
class IListViewBase extends Gtk.ListView {

    store?: Gio.ListStore;

    constructor({}, model_cls?: any /* TODO */) {
        super({})
    
        // Use the signal Factory, so we can connect our own methods to setup
        this.factory = new Gtk.SignalListItemFactory()

        // connect to Gtk.SignalListItemFactory signals
        // check https://docs.gtk.org/gtk4/class.SignalListItemFactory.html for details
        this.factory.connect('setup', this.on_factory_setup.bind(this))
        this.factory.connect('bind', this.on_factory_bind.bind(this))
        this.factory.connect('unbind', this.on_factory_unbind.bind(this))
        this.factory.connect('teardown', this.on_factory_teardown.bind(this))

        // Create data model, use our own class as elements
        this.set_factory(this.factory)
        this.store = this.setup_store(model_cls)

        // create a selection model containing our data model
        this.model = this.setup_model(this.store)
        this.model.connect('selection-changed', this.on_selection_changed.bind(this))

        // set the selection model to the view
        this.set_model(this.model)
    }

    /**
     * Setup the selection model to use in Gtk.ListView
     * Can be overloaded in subclass to use another Gtk.SelectModel model
     * @param store 
     * @returns 
     */
    setup_model(store: Gio.ListModel): Gtk.SelectionModel {
        return Gtk.SingleSelection.new(store)
    }

    /**
     * Setup the data model
     * must be overloaded in subclass to use another Gio.ListModel
     * @abstract
     * @param model_cls 
     */
    setup_store(model_cls: typeof ListElem): Gio.ListStore {
        throw NotImplemented;
    }

    /**
     * add element to the data model
     * @param elem 
     */
    add(elem: GObject.Object) {
        this.store?.append(elem)
    }

    // Gtk.SignalListItemFactory signal callbacks
    // transfer to some some callback stubs, there can be overloaded in
    // a subclass.

    /**
     * GtkSignalListItemFactory::setup signal callback
     * Setup the widgets to go into the ListView
     * @param widget 
     * @param item 
     */
    on_factory_setup(widget, item: Gtk.ListItem) {
        this.factory_setup(widget, item)
    }

    /**
     * GtkSignalListItemFactory::bind signal callback
     * apply data from model to widgets set in setup
     * @param widget 
     * @param item 
     */
    on_factory_bind(widget: Gtk.ListView, item: Gtk.ListItem) {
        this.factory_bind(widget, item)
    }

    /**
     * GtkSignalListItemFactory::unbind signal callback
     * Undo the the binding done in ::bind if needed
     * @param widget 
     * @param item 
     */
    on_factory_unbind(widget, item: Gtk.ListItem) {
        this.factory_unbind(widget, item)
    }

    /**
     * GtkSignalListItemFactory::setup signal callback
     * Undo the creation done in ::setup if needed
     * @param widget 
     * @param item 
     */
    on_factory_teardown(widget, item: Gtk.ListItem) {
        this.factory_teardown(widget, item)
    }

    on_selection_changed(widget, position: number, nItems: number) {
        // get the current selection (GtkBitset)
        const selection = widget.get_selection()
        // the the first value in the GtkBitset, that contain the index of the selection in the data model
        // as we use Gtk.SingleSelection, there can only be one ;-)
        const ndx = selection.get_nth(0)
        this.selection_changed(widget, ndx)
    }

    // --------------------> abstract callback methods <--------------------------------
    // Implement these methods in your subclass

    /**
     * @abstract
     * Setup the widgets to go into the ListView (Overload in subclass)
     */
    factory_setup(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * apply data from model to widgets set in setup (Overload in subclass)
     * @abstract
     * @param widget 
     * @param item 
     */
    factory_bind(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * @abstract
     * @param widget 
     * @param item 
     */
    factory_unbind(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * @abstract
     * @param widget 
     * @param item 
     */
    factory_teardown(widget: Gtk.ListView, item: Gtk.ListItem) {
        throw NotImplemented;
    }

    /**
     * trigged when selecting in listview is changed
     * ndx: is the index in the data store model that is selected
     * @abstract
     * @param widget 
     * @param item 
     */
    selection_changed(widget: Gtk.SelectionModel, ndx: number) {
        throw NotImplemented;
    }
}

export const ListViewBase = GObject.registerClass({
    GTypeName: 'ListViewBase',
    Implements: [Gio.ListModel as any],
    Properties: {
        'store': GObject.ParamSpec.jsobject(
            'store',
            'store',
            'store',
            GObject.ParamFlags.CONSTRUCT | GObject.ParamFlags.READWRITE,
        ),
    }
}, IListViewBase );