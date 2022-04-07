import Gtk from '../@types/Gjs/Gtk-4.0.js'
import Gio from '../@types/Gjs/Gio-2.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

import { NotImplemented } from "../constants.js"
import type { IColumnElem } from "../column-elem";

// TODO: see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/examples/glistmodel.js

/**
 * ColumnViewColumn base class, it setup the basic factory, selection model & data model
 * handlers must be overloaded & implemented in a sub class
 */
export class IViewColumnBase extends Gtk.ColumnViewColumn {

    store?: Gio.ListStore
    model?: Gtk.SelectionModel
    colView?: Gtk.ColumnView;

    constructor(config: Gtk.ColumnViewColumn_ConstructProps = {}, modelCls: typeof IColumnElem, colView: Gtk.ColumnView) {
        super(config)
        this.colView = colView
    
        // Use the signal Factory, so we can connect our own methods to setup
        this.factory = new Gtk.SignalListItemFactory()
        // connect to Gtk.SignalListItemFactory signals
        // check https://docs.gtk.org/gtk4/class.SignalListItemFactory.html for details
        this.factory.connect('setup', this.onFactorySetup.bind(this))
        this.factory.connect('bind', this.onFactoryBind.bind(this))
        this.factory.connect('unbind', this.onFactoryUnbind.bind(this))
        this.factory.connect('teardown', this.onFactoryTeardown.bind(this))
        // Create data model, use our own class as elements
        this.set_factory(this.factory)
        this.store = this.setupStore(modelCls)
        // create a selection model containing our data model
        if(this.store) this.model = this.setupModel(this.store)
        this.model?.connect('selection-changed', this.onSelectionChanged.bind(this))
        // add model to the ColumnView
        this.colView.set_model(this.model || null)
    }

    /**
     * Setup the selection model to use in Gtk.ListView
     * Can be overloaded in subclass to use another Gtk.SelectModel model
     * @param store 
     */
    setupModel(store: Gio.ListModel): Gtk.SelectionModel {
        return Gtk.SingleSelection.new(store)
    }

    /**
     * Setup the data model
     * must be overloaded in subclass to use another Gio.ListModel
     * @abstract
     * @param modelCls 
     */
    setupStore(modelCls: typeof IColumnElem): Gio.ListStore {
        throw NotImplemented;
    }

    /** add element to the data model */
    add(elem: GObject.Object) {
        this.store?.append(elem)
    }

    // Gtk.SignalListItemFactory signal callbacks
    // transfer to some some callback stubs, there can be overloaded in
    // a subclass.

    /**
     * GtkSignalListItemFactory::setup signal callback
     * Setup the widgets to go into the ListView
     */
    onFactorySetup(widget: Gtk.Widget, item: Gtk.ListItem) {
        this.factorySetup(widget, item)
    }

    /**
     * GtkSignalListItemFactory::bind signal callback
     * apply data from model to widgets set in setup
     * @param widget 
     * @param item 
     */
    onFactoryBind(widget: Gtk.ColumnViewColumn, item: Gtk.ListItem) {
        this.factoryBind(widget, item)
    }

    /**
     * GtkSignalListItemFactory::unbind signal callback
     * Undo the the binding done in ::bind if needed
     * @param widget 
     * @param item 
     */
    onFactoryUnbind(widget: Gtk.Widget, item: Gtk.ListItem) {
        this.factoryUnbind(widget, item)
    }
 
    /**
     * GtkSignalListItemFactory::setup signal callback
     * Undo the creation done in ::setup if needed
     */
    onFactoryTeardown(widget: Gtk.Widget, item: Gtk.ListItem) {
        this.factoryTeardown(widget, item)
    }

    onSelectionChanged(widget: Gtk.SelectionModel, position: number, nItems: number) {
        // get the current selection (GtkBitset)
        const selection = widget.get_selection()
        // the the first value in the GtkBitset, that contain the index of the selection in the data model
        // as we use Gtk.SingleSelection, there can only be one ;-)
        const ndx = selection.get_nth(0)
        this.selectionChanged(widget, ndx)
    }

    // --------------------> abstract callback methods <--------------------------------
    // Implement these methods in your subclass

    /**
     * Setup the widgets to go into the ColumnViewColumn (Overload in subclass)
     * @abstract
     * @param widget 
     * @param item 
     */
    factorySetup(widget: Gtk.Widget, item: Gtk.ListItem): void {
        throw NotImplemented;
    }
    
    /**
     * Apply data from model to widgets set in setup (Overload in subclass)
     * @abstract
     * @param widget 
     * @param item 
     */
    factoryBind(widget: Gtk.ColumnViewColumn, item: Gtk.ListItem): void {
        throw NotImplemented;
    }

    /**
     * @abstract
     * @param widget 
     * @param item 
     */
    factoryUnbind(widget: Gtk.Widget, item: Gtk.ListItem): void {
        throw NotImplemented;
    }

    /**
     * @abstract
     * @param widget 
     * @param item 
     */
    factoryTeardown(widget: Gtk.Widget, item: Gtk.ListItem): void {
        throw NotImplemented;
    }

    /**
     * trigged when selecting in listview is changed
     * ndx: is the index in the data store model that is selected
     * @abstract
     * @param widget 
     * @param ndx 
     */
    selectionChanged(widget: Gtk.SelectionModel, ndx: number): void {
        throw NotImplemented;
    }
}

export const ViewColumnBase = GObject.registerClass({
    GTypeName: 'ViewColumnBase',
    Implements: [Gio.ListModel],
}, IViewColumnBase );