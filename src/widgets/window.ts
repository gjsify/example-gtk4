import Gio from '../../@types/Gjs/Gio-2.0.js'
import GLib from '../../@types/Gjs/GLib-2.0.js'
import Gtk from '../../@types/Gjs/Gtk-4.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'

/** custom Gtk.ApplicationWindow with a headerbar */
class IWindow extends Gtk.ApplicationWindow {

    /** custom CSS provider */
    cssProvider?: Gtk.CssProvider;

    headerbar?: Gtk.HeaderBar;

    constructor(config: Gtk.ApplicationWindow_ConstructProps = {}) {
        const title = config?.title || "";
        super(config);
        
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
}, IWindow );