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
 
 class MyWindowClass extends Gtk.Window {
    _init(params = {}) {
        super._init(params);

        // The template has been initialized and you can access the children
        this.box.visible = true;

        // Internal children are set on the instance prefixed with a `_`
        this._button.visible = true;
    }
 }
 
 const MyWindow = GObject.registerClass({
     GTypeName: 'MyWindow'
 }, MyWindowClass );
 
 class ApplicationClass extends Gtk.Application {
     _init(constructProperties = {
         application_id: 'dk.rasmil.Example',
         flags: Gio.ApplicationFlags.FLAGS_NONE
     }) {
         super._init(constructProperties);
     }
 
     vfunc_activate() {
         super.vfunc_activate();
         let win = this.active_window;
         if (!win) {
             win = new MyWindow({
                 title: "My Gtk4 Application",
                 default_width: 800,
                 default_height: 800
             })
         }
         win.present()
     }
 }
  
 /** Main Application class */
 const Application = GObject.registerClass({
     GTypeName: 'Application'
 }, ApplicationClass );
  
  /** Run the main application */
 const main = () => {
     Gtk.init();
     // const loop = GLib.MainLoop.new(null, false);
     const app = Application();
     app.run(/*argv*/ null);
     // loop.run();
 }
 
 main();