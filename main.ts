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
import './polyfills/index.js'
import { System } from './@types/Gjs/Gjs.js'
import Gtk from './@types/Gjs/Gtk-4.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'
import Gio from './@types/Gjs/Gio-2.0.js'

import { _SearchBar, _Stack } from "./widgets/index.js";
import { MyWindow } from './my-window.js'

class _Application extends Gtk.Application {
    _init(constructProperties = {
        application_id: 'org.gjsify.example-gtk4',
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
                title: "",
                default_width: 800,
                default_height: 800,
                application: this,
            }, "My Gtk4 Application")
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
    // The proper way to run a Gtk.Application or Gio.Application is take ARGV and
    // prepend the program name to it, and pass that to run()
    const app = new Application();
    app.run([System.programInvocationName, ...ARGV]);
}

main();