/**
 * Copyright (C) 2021 Tim Lauridsen < tla[at]rasmil.dk >
 * Copyright (C) 2022 Pascal Garber < pascal[at]artandcode.studio >
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to
 * the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
 */

import './@types/Gjs/index.js'
import Gtk from './@types/Gjs/Gtk-4.0.js'
import Polkit from './@types/Gjs/Polkit-1.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'
import Gio from './@types/Gjs/Gio-2.0.js'
import GLib from './@types/Gjs/GLib-2.0.js'

import { Window, MenuButton } from "./widgets.js";

class _MyWindow extends Window {

    revealer?: Gtk.Revealer;

    override _init(config?: Gtk.ApplicationWindow_ConstructProps) {
        super._init(config)
        // load the custom css, so we can use it later
        this.loadCSS('main.css');

        // Add Menu Button to the titlebar (Right Side)
        const menu = new MenuButton();
        this.headerbar?.pack_end(menu);

        // Create actions to handle menu actions
        this.createAction('new', this.menuHandler.bind(this))
        this.createAction('about', this.menuHandler.bind(this))
        this.createAction('quit', this.menuHandler.bind(this))
        this.createAction('shortcuts', this.menuHandler.bind(this))

        // # make a new title label and add it to the left.
        // # So we kan place the stack switcher in the middle
        // label = Gtk.Label()
        // label.set_text(title)
        // # add 2 chars indent on the label for better looks
        // label.set_halign(Gtk.Align.END)
        // label.set_width_chars(len(title) + 2)
        // this.headerbar.pack_start(label)
        // # Main content box
        // content = Gtk.Box(orientation=Gtk.Orientation.VERTICAL)
        // # Search Bar
        // this.search = SearchBar(this)
        // content.append(this.search)
        // # search bar is active by default
        // this.search.set_callback(this.on_search)

        // # Stack
        // this.stack = Stack()

        // # Stack Page 1
        // this.page1 = this.setup_page_one('page1', 'Page 1')
        // # Stack Page 2
        // this.page2 = this.setup_page_two('page2', 'Page 2')
        // # Stack Page 3
        // this.page3 = this.setup_page_three('page3', 'Page 3')
        // # Stack Page 4
        // this.page4 = this.setup_page_four('page4', 'Page 4')
        // # Stack Page 5
        // this.page5 = this.setup_page_five('page5', 'Page 5')
        // # add stack switcher to center of titlebar
        // this.headerbar.set_title_widget(this.stack.switcher)
        // # Add stack to window
        // content.append(this.stack)
        // # Add main content box to window
        // this.set_child(content)
    }

    showShortcuts() {
        const builder = Gtk.Builder.new_from_file('shortcuts.ui')
        const shortcuts = builder.get_object('shortcuts') as Gtk.ShortcutsWindow;
        shortcuts.present()
    }

    // ---------------------- Handlers --------------------------

    /** Callback for  menu actions */
    menuHandler(action: Gio.SimpleAction) {
        const name = action.get_name()
        print(`active ${name}`)
        if (name === 'quit')
            this.close()
        else if (name === 'shortcuts')
            this.showShortcuts()
    }
}

const MyWindow = GObject.registerClass({
    GTypeName: 'MyWindow'
}, _MyWindow );

class _Application extends Gtk.Application {
    _init(constructProperties = {
        application_id: 'dk.rasmil.Example',
        flags: Gio.ApplicationFlags.FLAGS_NONE
    }) {
        super._init(constructProperties);
    }

    override vfunc_activate() {
        super.vfunc_activate();
        print("vfunc_activate");
        let win = this.active_window;
        if (!win) {
            print("MyWindow");
            win = new MyWindow({
                title: "My Gtk4 Application",
                default_width: 800,
                default_height: 800,
                application: this
            })
        }
        win.present()
    }

}
 
/** Main Application class */
const Application = GObject.registerClass({
    GTypeName: 'Application'
}, _Application );
 
 /** Run the main application */
const main = () => {
    Gtk.init();
    const loop = GLib.MainLoop.new(null, false);
    const app = new Application();
    app.run(/*argv*/ null);
    loop.run();
}

main();