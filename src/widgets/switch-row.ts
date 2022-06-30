import Gtk from '../../@types/Gjs/Gtk-4.0.js'
import GObject from '../../@types/Gjs/GObject-2.0.js'

export class ISwitchRow extends Gtk.Box {

    label?: Gtk.Label;
    switch?: Gtk.Switch;

    constructor(config: Gtk.Box.ConstructorProperties = {}, text: string = "") {
        config.orientation ||= Gtk.Orientation.HORIZONTAL; 
        super(config)

        // Switch to control overlay visibility
        this.label = Gtk.Label.new(text)
        this.label.set_halign(Gtk.Align.FILL)
        this.label.set_valign(Gtk.Align.CENTER)
        this.label.set_hexpand(true)
        this.label.set_xalign(0.0)
        this.label.set_margin_start(20)
        this.label.set_margin_bottom(20)
        this.append(this.label)
        this.switch = new Gtk.Switch()
        this.switch.set_halign(Gtk.Align.END)
        this.switch.set_margin_end(20)
        this.switch.set_margin_bottom(20)
        this.append(this.switch)
    }

    connect(signal: string, callback: (...args: any[]) => any): number {
        return this.switch?.connect(signal, callback) || -1
    }

    setState(state: boolean) {
        return this.switch?.set_state(state)
    }
}

export const SwitchRow = GObject.registerClass({
    GTypeName: 'SwitchRow'
}, ISwitchRow );