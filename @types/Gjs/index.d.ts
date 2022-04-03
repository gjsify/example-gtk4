/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */

import type * as Gjs from "./Gjs";
  
      import type Gtk40 from "./Gtk-4.0";
    
  
      import type Polkit10 from "./Polkit-1.0";
    
  
      import type Gsk40 from "./Gsk-4.0";
    
  
      import type Gdk40 from "./Gdk-4.0";
    
  
      import type GObject20 from "./GObject-2.0";
    
  
      import type Graphene10 from "./Graphene-1.0";
    
  
      import type Cairo10 from "./cairo-1.0";
    
  
      import type PangoCairo10 from "./PangoCairo-1.0";
    
  
      import type Pango10 from "./Pango-1.0";
    
  
      import type Gio20 from "./Gio-2.0";
    
  
      import type GdkPixbuf20 from "./GdkPixbuf-2.0";
    
  
      import type GLib20 from "./GLib-2.0";
    
  
      import type HarfBuzz00 from "./HarfBuzz-0.0";
    
  
      import type GModule20 from "./GModule-2.0";
    

declare global {
    function print(...args: any[]): void;
    function printerr(...args: any[]): void
    function log(message?: string): void
    function logError(exception: any, message?: string): void
    const ARGV: string[]

    // Timers
    // See https://gitlab.gnome.org/GNOME/gjs/-/blob/master/modules/esm/_timers.js

    /**
     * @this {typeof globalThis}
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait before running callback
     * @param args arguments to pass to callback
     */
     function setTimeout(callback: (...args: any[]) => any, delay: number, ...args: any[])

     /**
      * @this {typeof globalThis}
      * @param callback a callback function
      * @param delay the duration in milliseconds to wait between calling callback
      * @param args arguments to pass to callback
      */
    function setInterval(callback, delay: number, ...args: any[])
 
     /**
      * @param timeout the timeout to clear
      */
    function clearTimeout(timeout: GLib20.Source)
 
     /**
      * @param timeout the timeout to clear
      */
    function clearInterval(timeout: GLib20.Source)

    const imports: typeof Gjs & {
        gi: {
            Gtk:              typeof Gtk40
            Polkit:              typeof Polkit10
            Gsk:              typeof Gsk40
            Gdk:              typeof Gdk40
            GObject:              typeof GObject20
            Graphene:              typeof Graphene10
            cairo:              typeof Cairo10
            PangoCairo:              typeof PangoCairo10
            Pango:              typeof Pango10
            Gio:              typeof Gio20
            GdkPixbuf:              typeof GdkPixbuf20
            GLib:              typeof GLib20
            HarfBuzz:              typeof HarfBuzz00
            GModule:              typeof GModule20
        }
        versions: {
            Gtk:              '4.0'
            Polkit:              '1.0'
            Gsk:              '4.0'
            Gdk:              '4.0'
            GObject:              '2.0'
            Graphene:              '1.0'
            cairo:              '1.0'
            PangoCairo:              '1.0'
            Pango:              '1.0'
            Gio:              '2.0'
            GdkPixbuf:              '2.0'
            GLib:              '2.0'
            HarfBuzz:              '0.0'
            GModule:              '2.0'
        }
        searchPath: string[];
    }
}

export { imports }
export default imports