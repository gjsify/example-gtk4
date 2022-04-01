import Gio from './@types/Gjs/Gio-2.0.js'
import GLib from './@types/Gjs/GLib-2.0.js'
import Gtk from './@types/Gjs/Gtk-4.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'

import { APP_MENU } from "./constants.js";

/**
 * Wrapper class for at Gtk.Menubutton with a menu defined
 * in a Gtk.Builder xml string
 */
class _MenuButton extends Gtk.MenuButton {

    override _init(config: Gtk.MenuButton_ConstructProps = {}) {
        const xml = APP_MENU;
        const name = 'app-menu';
        const icon_name = 'open-menu-symbolic';

        super._init(config);
        const builder = new Gtk.Builder();
        builder.add_from_string(xml, xml.length)
        const menu = builder.get_object(name) as Gio.MenuModel; // TODO: ts-for-gir: Use Generics here
        this.set_menu_model(menu);
        this.set_icon_name(icon_name);
    }
}

export const MenuButton = GObject.registerClass({
    GTypeName: 'MenuButton'
}, _MenuButton );

/** Wrapper for Gtk.Stack with  with a StackSwitcher */
class _Stack extends Gtk.Stack {

    public switcher?: Gtk.StackSwitcher;

    private _pages: {[name: string]: Gtk.StackPage} = {};

    override _init(config: Gtk.Stack_ConstructProps = {}) {
        super._init(config);
        this.switcher = new Gtk.StackSwitcher()
        this.switcher.set_stack(this)
    }


    public add_page(name: string, title: string, widget: Gtk.Widget) {
        const page = this.add_child(widget)
        page.set_name(name)
        page.set_title(title)
        this._pages[name] = page
        return page
    }
}

export const Stack = GObject.registerClass({
    GTypeName: 'Stack'
}, _Stack );

/** custom Gtk.ApplicationWindow with a headerbar */
class _Window extends Gtk.ApplicationWindow {

    /** custom CSS provider */
    cssProvider?: Gtk.CssProvider;

    headerbar?: Gtk.HeaderBar;

    override _init(config: Gtk.ApplicationWindow_ConstructProps = {}) {
        const title = config?.title || "";
        delete config.title;
        super._init(config);
        
        this.headerbar = new Gtk.HeaderBar();
        this.set_titlebar(this.headerbar)
        const label = new Gtk.Label()
        label.set_text(title)
        this.headerbar.set_title_widget(label)
    }

    /** create a provider for custom styling */
    public loadCSS(path: string) {
        print("loadCSS", path);
        const file = Gio.File.new_for_path(path);
        if (file.query_exists(null)) {
            const cssProvider = new Gtk.CssProvider();
            try {
                cssProvider.load_from_path(path);
            } catch (error) {
                printerr(`Error loading CSS`, error)
            }
            print("loading custom styling")
            this.get_style_context().add_provider(cssProvider, 1);
            this.cssProvider = cssProvider;
        } else {
            printerr(`File ${path} not found!`)
        }
    }

    private _addWidgetStyling(widget: Gtk.Widget) {
        if (this.cssProvider) {
            const context = widget.get_style_context();
            context.add_provider(this.cssProvider, Gtk.STYLE_PROVIDER_PRIORITY_USER);
        }
    }

    public addCustomStyling(widget: Gtk.Widget) {
        this._addWidgetStyling(widget);
        // iterate children recursive
        const children = widget.observe_children();
        for (let i = 0; i < children.get_n_items(); i++) {
            const child = children.get_item(i);
            this.addCustomStyling(child as Gtk.Widget);
        }
    }

    /** Add an Action and connect to a callback */
    public createAction(name: string, callback: ($obj: Gio.SimpleAction, parameter?: GLib.Variant | null | undefined) => void) {
        const action = Gio.SimpleAction.new(name, null);
        action.connect("activate", callback);
        this.add_action(action);
    }
}

export const Window = GObject.registerClass({
    GTypeName: 'Window'
}, _Window );