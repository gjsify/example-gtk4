import GObject from './@types/Gjs/GObject-2.0.js'
import Gio from './@types/Gjs/Gio-2.0.js'

/** custom data element for a ListView model (Must be based on GObject) */
export class _ListElem extends GObject.Object {

    name = "";
    state = false

    _init(name = "", state = false) {
        super._init();
        this.name = name
        this.state = state
    }

    _repr() {
        return `ListElem(name: ${this.name} state: ${this.state})`
    }
}

export const ListElem = GObject.registerClass({
    GTypeName: 'ListElem',
    // TODO Implements: [Gio.ListModel],
}, _ListElem );
