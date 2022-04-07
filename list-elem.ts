import GObject from './@types/Gjs/GObject-2.0.js'
import Gio from './@types/Gjs/Gio-2.0.js'

/** custom data element for a ListView model (Must be based on GObject) */
export class IListElem extends GObject.Object {

    name = "";
    state = false

    constructor(name = "", state = false) {
        super();
        this.name = name
        this.state = state
    }

    _repr() {
        return `ListElem(name: ${this.name} state: ${this.state})`
    }
}

export const ListElem = GObject.registerClass({
    GTypeName: 'ListElem',
    Implements: [Gio.ListModel],
}, IListElem );
