import Gtk from './@types/Gjs/Gtk-4.0.js'
import GObject from './@types/Gjs/GObject-2.0.js'
import Gio from './@types/Gjs/Gio-2.0.js'

import { Window, MenuButton, SearchBar, ISearchBar, Stack, IStack, IconSelector, TextSelector, SwitchRow } from "./widgets/index.js";
import { get_font_markup, getPermission, range } from "./utils.js";
import { LOREM_IPSUM } from "./constants.js";
import { MyColumnViewColumn } from "./my-column-view-column.js";
import { MyListView, IMyListView } from "./my-list-view.js" 
import { ColumnElem } from "./column-elem.js";

export class IMyWindow extends Window {

    revealer?: Gtk.Revealer;
    search?: ISearchBar;
    columnView?: Gtk.ColumnView;
    stack?: IStack;
    leftRightPaned?: Gtk.Paned;
    topBottomPaned?: Gtk.Paned;
    bottomBox?: Gtk.Box;
    listview?: IMyListView;
    overlaInfo?: Gtk.InfoBar;

    page1?: Gtk.StackPage;
    page2?: Gtk.StackPage;
    page3?: Gtk.StackPage;
    page4?: Gtk.StackPage;
    page5?: Gtk.StackPage;

    page1Label?: Gtk.Label;
    page2Label?: Gtk.Label;
    page3Label?: Gtk.Label;
    page4Label?: Gtk.Label;
    page5Label?: Gtk.Label;

    constructor(config?: Gtk.ApplicationWindow_ConstructProps, title = "") {
        super(config)

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

        // make a new title label and add it to the left.
        // So we can place the stack switcher in the middle
        const label = new Gtk.Label()
        label.set_text(title);

        // add 2 chars indent on the label for better looks
        label.set_halign(Gtk.Align.END)
        label.set_width_chars(title.length + 2)
        this.headerbar?.pack_start(label)

        // Main content box
        const content = new Gtk.Box( { orientation: Gtk.Orientation.VERTICAL } )

        // Search Bar
        this.search = new SearchBar({}, this)
        content.append(this.search)

        // search bar is active by default
        this.search.setCallback(this.onSearch.bind(this))

        // Stack
        this.stack = new Stack()

        // Stack Page 1
        this.page1 = this.setupPageOne('page1', 'Page 1')
        // Stack Page 2
        this.page2 = this.setupPageTwo('page2', 'Page 2')
        // Stack Page 3
        this.page3 = this.setupPageThree('page3', 'Page 3')
        // Stack Page 4
        this.page4 = this.setupPageFour('page4', 'Page 4')
        // Stack Page 5
        this.page5 = this.setupPageFive('page5', 'Page 5')

        if (!this.stack) {
            throw new Error("this.stack not defined!");
        }

        if (!this.headerbar) {
            throw new Error("this.headerbar not defined!");
        }       

        // add stack switcher to center of titlebar
        // this.headerbar?.set_title_widget(this.stack?.switcher || null);
        this.stack.setParent(this.headerbar);

        // Add stack to window
        content.append(this.stack)

        // Add main content box to window
        this.set_child(content)
    }

    /** setup the common widgets for each page */
    setupPageHeader(name: string, title: string) {

        // Content box for the page
        const frame = new Gtk.Frame()

        // Set Frame Margins
        frame.set_margin_top(15)
        frame.set_margin_start(15)
        frame.set_margin_end(15)
        frame.set_margin_bottom(15)

        // Content box for the page
        const content = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})

        // Add a label with custom font in the center
        const fontLabel = new Gtk.Label()
        fontLabel.set_margin_top(20)
        const markup = get_font_markup('Noto Sans Regular 20', `This is ${title}`)
        fontLabel.set_markup(markup)
        fontLabel.set_valign(Gtk.Align.CENTER)
        content.append(fontLabel)

        // Output label to write user action on the page
        const label = new Gtk.Label()
        label.set_margin_top(20)
        label.set_margin_start(20)
        label.set_hexpand(true)
        label.set_halign(Gtk.Align.CENTER)
        label.set_xalign(0.0)
        content.append(label)
        frame.set_child(content)
        return { frame, content, label }
    }

    /** Add a page with a icon selector to the stack */
    setupPageOne(name: string, title: string) {

        // Main Content box for the page
        const main = new Gtk.Box({orientation:Gtk.Orientation.HORIZONTAL})

        // Add info selector
        const selector = new IconSelector()
        selector.addRow("row1", "dialog-information-symbolic")
        selector.addRow("row2", "software-update-available-symbolic")
        selector.addRow("row3", "drive-multidisk-symbolic")
        selector.addRow("row4", "insert-object-symbolic")
        selector.setCallback(this.onSelectIconSelector.bind(this))
        main.append(selector)
        const { frame: page_frame, content: content_right, label: lbl } = this.setupPageHeader(name, title)
        this.page1Label = lbl

        // Lock button
        const lockBtn = Gtk.LockButton.new(getPermission())
        lockBtn.set_margin_top(20)
        lockBtn.set_halign(Gtk.Align.CENTER)
        lockBtn.set_hexpand(false)
        content_right.append(lockBtn)

        // buttons
        const box = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL})
        box.set_halign(Gtk.Align.CENTER)
        box.set_margin_top(20)
        box.set_spacing(10)
        for (const x in range(5)) {
            const btn = new Gtk.Button()
            btn.set_label(`Button ${x}`)
            btn.connect('clicked', this.onButtonClicked.bind(this))
            box.append(btn)
        }
        content_right.append(box)

        // Entry
        const entry = new Gtk.Entry()
        entry.set_halign(Gtk.Align.FILL)
        entry.set_valign(Gtk.Align.END)
        entry.set_margin_top(20)
        entry.set_margin_start(20)
        entry.set_margin_end(20)
        entry.set_placeholder_text("Type something here ....")
        entry.connect('activate', this.onEntryActivate.bind(this))
        content_right.append(entry)

        // Calendar
        const calendar = new Gtk.Calendar()
        calendar.set_margin_top(20)
        calendar.set_halign(Gtk.Align.CENTER)
        calendar.connect('day-selected', this.onCalendarChanged.bind(this))
        content_right.append(calendar)

        // DropDown
        const model = new Gtk.StringList()
        // Note: The original python example seems to use here in index instead of the string
        for (const txt in ['One', 'Two', 'Three', 'Four']) {
            model.append(txt)
        }
        const dropdown = Gtk.DropDown.new(model, null); // TODO: ts-for-gir do not allow undefined here
        dropdown.set_margin_top(20)
        dropdown.set_margin_start(20)
        dropdown.set_size_request(200, -1)
        dropdown.set_halign(Gtk.Align.START)
        content_right.append(dropdown)

        // DropDown
        const dropdownColor = Gtk.DropDown.new_from_strings(
            ['Red', 'Green', 'Blue', 'Black', 'White'])
        dropdownColor.set_margin_top(20)
        dropdownColor.set_margin_start(20)
        dropdownColor.set_size_request(200, -1)
        dropdownColor.set_halign(Gtk.Align.START)
        content_right.append(dropdownColor)
        main.append(page_frame)

        // Add the content box as a new page in the stack
        return this.stack?.addPage(name, title, main)
    }

    /** Add a page with a text selector to the stack */
    setupPageTwo(name: string, title: string) {

        // Content box for the page
        const main = new Gtk.Box({orientation: Gtk.Orientation.HORIZONTAL})

        // Add info selector
        const selector = new TextSelector()
        selector.addRow("Orange", "Orange")
        selector.addRow("Apple", "Apple")
        selector.addRow("Water Melon", "Water Melon")
        selector.addRow("Lollypop", "Lollypop")
        selector.setCallback(this.onSelectTextSelector.bind(this))
        main.append(selector)

        // Add a label with custom font in the center
        const {frame, content: content_right, label } = this.setupPageHeader(name, title)
        this.page2Label = label

        // Overlay
        const overlaInfo = new Gtk.InfoBar()
        overlaInfo.set_halign(Gtk.Align.FILL)
        overlaInfo.set_valign(Gtk.Align.START)
        overlaInfo.set_margin_top(10)
        overlaInfo.set_margin_start(10)
        overlaInfo.set_margin_end(10)
        const lbl = new Gtk.Label()
        lbl.set_halign(Gtk.Align.FILL)
        lbl.set_valign(Gtk.Align.FILL)
        lbl.set_hexpand(true)
        lbl.set_vexpand(true)
        lbl.set_markup(
            '<span foreground="#ff0000" size="xx-large">This is an Gtk.Infobar as an overlay</span>')
        overlaInfo.add_child(lbl)
        this.overlaInfo = overlaInfo
        const frame_child = new Gtk.Frame()

        // TexkView
        const sw = new Gtk.ScrolledWindow()
        const text = Gtk.TextView.new()
        text.set_vexpand(true)

        // Set Wrap Mode to word
        text.set_wrap_mode(Gtk.WrapMode.WORD)

        // Add some text
        let lorem = '';
        for (const _ of range(10)) {
            lorem += LOREM_IPSUM;
        }
        text.get_buffer().set_text(lorem, lorem.length)
        sw.set_child(text)
        frame_child.set_child(sw)
        const overlay = new Gtk.Overlay()
        overlay.set_margin_top(20)
        overlay.set_margin_start(20)
        overlay.set_margin_end(20)
        overlay.set_margin_bottom(20)
        overlay.set_child(frame_child)
        overlay.add_overlay(overlaInfo)
        content_right.append(overlay)

        // Switch to control overlay visibility
        const switchRow = new SwitchRow({}, "Show Overlay")
        switchRow.setState(true)
        switchRow.connect('state-set', this.onSwitchOverlay.bind(this))
        content_right.append(switchRow)
        main.append(frame)

        if (!this.stack) {
            throw new Error('this.stack is not defined!');
        }

        // Add the content box as a new page in the stack
        return this.stack?.addPage(name, title, main)
    }

    /** Add a page with css styled content to the stack */
    setupPageThree(name: string, title: string) {
        // Content box for the page
        const frame = new Gtk.Frame()

        // Set Frame Margins
        frame.set_margin_top(15)
        frame.set_margin_start(15)
        frame.set_margin_end(15)
        frame.set_margin_bottom(15)

        // Left/Right Paned
        // Orientation is the ways the separator is moving, not the way it is facing
        // So HORIZONTAL split in Left/Right and VERTICAL split in Top/Down
        this.leftRightPaned = new Gtk.Paned({
            orientation: Gtk.Orientation.HORIZONTAL})
    
        // Left Side
        const leftBox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})
        leftBox.set_vexpand(true)
        leftBox.set_spacing(5)
        const leftLabel = Gtk.Label.new("LEFT")
        leftLabel.set_valign(Gtk.Align.START)
        leftLabel.set_halign(Gtk.Align.START)
        leftBox.append(leftLabel)

        // Add Progress Bar
        const progress = new Gtk.ProgressBar()
        progress.set_fraction(.75)
        leftBox.append(progress)

        // Add Scale
        const scale = Gtk.Scale.new_with_range(Gtk.Orientation.HORIZONTAL, 0, 100, 5)
        scale.set_value(25)
        leftBox.append(scale)

        // separator
        const separator = new Gtk.Separator({orientation:Gtk.Orientation.HORIZONTAL})
        leftBox.append(separator)
        this.leftRightPaned.set_start_child(leftBox)
        this.leftRightPaned.set_shrink_start_child(false)  // Can't shrink

        // Right Side
        const rightBox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})
        const rightLabel = Gtk.Label.new("RIGHT")
        rightLabel.set_valign(Gtk.Align.START)
        rightLabel.set_halign(Gtk.Align.START)
        rightBox.append(rightLabel)

        // TextView
        const text = Gtk.TextView.new()

        // Set the default width
        text.set_size_request(150, -1)

        // Set Wrap Mode to word
        text.set_wrap_mode(Gtk.WrapMode.WORD)

        // Add some text
        const txt = LOREM_IPSUM
        text.get_buffer().set_text(txt, txt.length)
        rightBox.append(text)

        // Add Switches
        for (const txt of ['Reveal', 'Yet Another Option']) {
            const grid = new Gtk.Grid()
            grid.set_column_spacing(30)
            grid.insert_row(0)
            grid.insert_column(0)
            grid.insert_column(1)
            grid.insert_column(2)
            grid.set_row_homogeneous(true)
            const label = Gtk.Label.new(txt)
            label.set_hexpand(true)
            label.set_xalign(0.0)
            label.set_valign(Gtk.Align.CENTER)
            const _switch = new Gtk.Switch()
            if (txt === "Reveal") {
                _switch.connect('state-set', this.onSwitchActivate.bind(this))
                _switch.set_state(true)
            }
            grid.attach(label, 0, 1, 2, 1)
            grid.attach(_switch, 2, 1, 1, 1)
            rightBox.append(grid)
        }

        // Some buttons
        const lockBtn = Gtk.LockButton.new(null)
        rightBox.append(lockBtn)

        // Add the box to paned
        this.leftRightPaned.set_end_child(rightBox)
        this.leftRightPaned.set_shrink_end_child(false)  // Can't shrink

        // Top/Down Paned
        this.topBottomPaned = new Gtk.Paned({orientation: Gtk.Orientation.VERTICAL})

        // Top
        this.topBottomPaned.set_start_child(this.leftRightPaned)
        this.topBottomPaned.set_shrink_start_child(false)

        // Bottom
        this.bottomBox = new Gtk.Box({orientation: Gtk.Orientation.VERTICAL})
        this.bottomBox.set_vexpand(false)

        // Add a label with custom font in the center
        let label = new Gtk.Label()
        let markup = get_font_markup(
            'Noto Sans Regular 24', `This page is styled using main.css`)
        label.set_markup(markup)

        // fill the whole page, will make the Label centered.
        label.set_halign(Gtk.Align.CENTER)
        label.set_vexpand(false)
        this.bottomBox.append(label)
        label = new Gtk.Label()
        markup = get_font_markup(
            'Noto Sans Regular 18', `UGLY AS HELL, but shows how it is working`)
        label.set_markup(markup)

        // fill the whole page, will make the Label centered.
        label.set_halign(Gtk.Align.CENTER)
        label.set_vexpand(false)
        this.bottomBox.append(label)

        // Revealer
        this.revealer = new Gtk.Revealer()
        this.revealer.set_valign(Gtk.Align.END)
        const box = new Gtk.Box({orientation:Gtk.Orientation.VERTICAL})
        label = Gtk.Label.new("This is a revlealer")
        box.append(label)
        this.revealer.set_child(box)
        this.revealer.set_transition_type(Gtk.RevealerTransitionType.CROSSFADE)
        this.revealer.set_transition_duration(200)
        this.revealer.set_reveal_child(true)
        this.bottomBox.append(this.revealer)
        this.topBottomPaned.set_end_child(this.bottomBox)
        this.topBottomPaned.set_shrink_end_child(false)  // Can't shrink
        frame.set_child(this.topBottomPaned)
        this.page3Label = label

        // add custom styling to widgets
        this.addCustomStyling(frame)

        // Add the content box as a new page in the stack
        return this.stack?.addPage(name, title, frame)
    }

    /** Add a page with a text selector to the stack */
    setupPageFour(name: string, title: string) {
        // Content box for the page
        const { frame, content, label } = this.setupPageHeader(name, title)
        this.page4Label = label

        // ColumnView with custom columns
        this.columnView = new Gtk.ColumnView()
        this.columnView.set_show_column_separators(true)
        const data: string[] = [];
        for (const row of range(50)) {
            data.push(`Data Row: ${row}`)
        }
        for (const i of range(4)) {
            const column = new MyColumnViewColumn({}, ColumnElem, this.columnView, data, this)
            column.set_title(`Column ${i}`)
            this.columnView.append_column(column)
        }
        let lwFrame = new Gtk.Frame()
        lwFrame.set_valign(Gtk.Align.FILL)
        lwFrame.set_vexpand(true)
        lwFrame.set_margin_start(20)
        lwFrame.set_margin_end(20)
        lwFrame.set_margin_top(10)
        lwFrame.set_margin_bottom(10)
        let sw = new Gtk.ScrolledWindow()
        sw.set_child(this.columnView)
        lwFrame.set_child(sw)
        content.append(lwFrame)

        // Listview with switches
        this.listview = new MyListView({}, this)
        lwFrame = new Gtk.Frame()
        lwFrame.set_valign(Gtk.Align.FILL)
        lwFrame.set_vexpand(true)
        lwFrame.set_margin_start(20)
        lwFrame.set_margin_end(20)
        // lwFrame.set_margin_top(10)
        lwFrame.set_margin_bottom(10)
        sw = new Gtk.ScrolledWindow()
        sw.set_child(this.listview)
        lwFrame.set_child(sw)
        content.append(lwFrame)

        // // Simple Listview with strings
        // this.listview_str = new MyListViewStrings({}, this)
        // lwFrame = new Gtk.Frame()
        // lwFrame.set_valign(Gtk.Align.FILL)
        // lwFrame.set_vexpand(true)
        // lwFrame.set_margin_start(20)
        // lwFrame.set_margin_end(20)
        // // lwFrame.set_margin_top(10)
        // lwFrame.set_margin_bottom(10)
        // sw = new Gtk.ScrolledWindow()

        // // Create Gtk.Listview
        // const lw = this.listview_str
        // sw.set_child(lw)
        // lwFrame.set_child(sw)
        // content.append(lwFrame)
        // frame.set_child(content)

        // Add the content box as a new page in the stack
        return this.stack?.addPage(name, title, frame)
    }

    /** Add a new page to the stack */
    setupPageFive(name: string, title: string) {
        // Content box for the page
        const {frame, content, label} = this.setupPageHeader(name, title)
        // this.page5_label = label
        // // Material Color button
        // const btn_row = new ButtonRow(["Material Color"], this.onButtonChooser.bind(this))
        // content.append(btn_row)
        // // Add the content box as a new page in the stack
        return this.stack?.addPage(name, title, frame)
    }

    public getTextMarkup(txt: string) {
        txt = `<span foreground="#BF360C" weight="bold">${txt}</span>`
        const markup = get_font_markup('Noto Sans Regular 14', txt)
        return markup
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

    onColorSelected(widget: any /* TODO */) {
        // const selectedColor = this.chooser.get_rgba()
        // const colorTxt = selectedColor.to_string()
        // const markup = this.getTextMarkup(
        //     `${widget.get_label()} was pressed. ${colorTxt}`)
        // this.page5Label?.set_markup(markup)
    }

    /** callback for button clicked (Page5) */
    onButtonChooser(/*widget: ButtonRow*/) {
        // TODO:
        // const dialog = new MaterialColorDialog("Select Color", this)
        // dialog.connect('response', this.onDialogResponse.bind(this))
        // dialog.show()
    }

    /** callback for the searchbar entry */
    onSearch(widget: Gtk.SearchEntry) {
        print(`Searching for : ${widget.get_text()}`)
    }

    /** called when icon_selector selection is changed (Page1) */
    onSelectIconSelector(name: string) {
        const markup = this.getTextMarkup(`${name} is selected`)
        this.page1Label?.set_markup(markup)
    }

    /** called when text_selector is changed (Page2) */
    onSelectTextSelector(name: string) {
        const markup = this.getTextMarkup(`${name} is selected`)
        this.page2Label?.set_markup(markup)
    }

    /** callback for reveal switch (Page3) */
    onSwitchActivate(widget: Gtk.Switch, state: boolean) {
        if(this.revealer) {
            this.revealer.set_reveal_child(state)
            print("setTimeout of 500ms")
            setTimeout(() => {
                print("setTimeout done")
                // This has a different behavior than in the python version?
                this.topBottomPaned?.set_position(1000)
            }, 500);
        }
    }

    /** callback for overlay switch (Page2) */
    onSwitchOverlay(widget: Gtk.Switch, state: boolean) {
        print("onSwitchOverlay state: ", state);
        if (this.overlaInfo)
            this.overlaInfo.set_revealed(state)
    }

    /** callback for button clicked (Page1) */
    onButtonClicked(widget: Gtk.Button) {
        const markup = this.getTextMarkup(`${widget.get_label()} was pressed`)
        this.page1Label?.set_markup(markup)
    }

    /** callback for calendar selection (Page1) */
    onCalendarChanged(widget: Gtk.Calendar) {
        const date = widget.get_date().format('%F')
        const txt = `${date} was selected in calendar`
        const markup = this.getTextMarkup(txt)
        this.page1Label?.set_markup(markup)
    }

    /** callback for entry activation (Page1) */
    onEntryActivate(widget: Gtk.Entry) {
        const txt = `${widget.get_buffer().get_text()} was typed in entry`
        const markup = this.getTextMarkup(txt)
        this.page1Label?.set_markup(markup)
    }

    onDialogResponse(widget: any /* TODO */, responseId: number) {
        if (responseId == Gtk.ResponseType.OK) {
            // get selected color in hex format
            const color = widget.get_color()
            const markup = `<span size="xx-large" foreground="${color}">the color ${color} was selected</span>`
            this.page5Label?.set_markup(markup)
        } else if (responseId == Gtk.ResponseType.CANCEL) {
            print("cancel")
            // if the message dialog is destroyed (by pressing ESC)
        } else if (responseId == Gtk.ResponseType.DELETE_EVENT) {
            print("dialog closed or cancelled")
        }
        widget.destroy()
    }
}

export const MyWindow = GObject.registerClass({
    GTypeName: 'MyWindow'
}, IMyWindow );