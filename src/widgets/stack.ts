import Gtk from '../../@types/Gjs/Gtk-4.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'

/** Wrapper for Gtk.Stack with  with a StackSwitcher */
export class IStack extends Gtk.Stack {

    public switcher?: Gtk.StackSwitcher;

    private _pages: {[name: string]: Gtk.StackPage} = {};

    constructor(config: Gtk.Stack.ConstructorProperties = {}) {
        super(config);
        this._pages = {};
        this.switcher = new Gtk.StackSwitcher()
        this.switcher.set_stack(this)
    }

    public addPage(name: string, title: string, widget: Gtk.Widget) {
        const page = this.add_child(widget)
        page.set_name(name)
        page.set_title(title)
        this._pages[name] = page
        return page
    }

    public setParent(headerBar: Gtk.HeaderBar) {
        if (!this.switcher) {
            throw new Error('this.switcher is not defined!')
        }
        headerBar.set_title_widget(this.switcher);
    }
}

export const Stack = GObject.registerClass({
    GTypeName: 'Stack',
}, IStack );