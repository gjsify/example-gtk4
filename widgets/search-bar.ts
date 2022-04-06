import Gtk from '../@types/Gjs/Gtk-4.0.js'
import GObject from '../@types/Gjs/GObject-2.0.js'

/** Wrapper for Gtk.Searchbar Gtk.SearchEntry */
export class ISearchBar extends Gtk.SearchBar {

    entry?: Gtk.SearchEntry;
    searchOptions?: Gtk.MenuButton;

    constructor(config: Gtk.SearchBar_ConstructProps = {}, win?: Gtk.ApplicationWindow) {
        super(config);

        const box = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL})
        box.set_spacing(10);

        // Add SearchEntry
        this.entry = new Gtk.SearchEntry();
        this.entry.set_hexpand(true);
        box.append(this.entry)

        // Add Search Options button (Menu content need to be added)
        const btn = new Gtk.MenuButton()
        btn.set_icon_name('preferences-other-symbolic')
        this.searchOptions = btn
        box.append(btn)
        this.set_child(box)

        // connect search entry to search bar
        this.connect_entry(this.entry)
        if (win) {
            // set key capture from main window, it will show searchbar, when you start typing
            this.set_key_capture_widget(win)
        }

        // show close button in search bar
        this.set_show_close_button(true)

        // Set search mode to off by default
        this.set_search_mode(false)
    }

    /** Connect the search entry activate to an callback handler */
    setCallback(callback: ($obj: Gtk.SearchEntry) => void) {
        this.entry?.connect('activate', callback);
    }
}

export const SearchBar = GObject.registerClass({
    GTypeName: 'SearchBar'
}, ISearchBar );