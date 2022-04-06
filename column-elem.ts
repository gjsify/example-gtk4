import GObject from './@types/Gjs/GObject-2.0.js'

/** custom data element for a ColumnView model (Must be based on GObject) */
export class IColumnElem extends GObject.Object {

    name = "";

    constructor(name: string) {
        super();
        this.name = name
    }

    _repr() {
        return `ColumnElem(name: ${this.name})`
    }
}

export const ColumnElem = GObject.registerClass({
    GTypeName: 'ColumnElem'
}, IColumnElem );
