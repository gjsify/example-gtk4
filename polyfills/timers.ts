// Gjs >= 1.71.1 has a standards-compliant `setTimeout()` and `setInterval()` therefore this polyfill is for older Gjs versions
// SPDX-License-Identifier: MIT OR LGPL-2.0-or-later
// SPDX-FileCopyrightText: 2021 Evan Welsh <contact@evanwelsh.com>

/* exported setTimeout, setInterval, clearTimeout, clearInterval */
/* eslint no-implicit-coercion: ["error", {"allow": ["+"]}] */
// Note: implicit coercion with + is used to perform the ToNumber algorithm from
// the timers specification

import GLib from '../@types/Gjs/GLib-2.0.js';
import GObject from '../@types/Gjs/GObject-2.0.js';

if(!globalThis.setTimeout || !globalThis.setInterval) {

    /**
     * @param delay a number value (in milliseconds)
     */
    function validateDelay(delay: number) {
        // |0 always returns a signed 32-bit integer.
        return Math.max(0, +delay | 0);
    }

    /** @type {Map<GLib.Source, number>} */
    const timeouts = new Map();

    /**
     * @param source the source to add to our map
     */
    function addSource(source: GLib.Source) {
        const id = source.attach(null);
        timeouts.set(source, id);
    }

    /**
     * @param source the source object to remove from our map
     */
    function releaseSource(source: GLib.Source) {
        timeouts.delete(source);
    }

    /**
     * @param thisArg 'this' argument
     * @returns
     */
    function checkThis(thisArg: unknown): asserts thisArg is (null | undefined | typeof globalThis) {
        if (thisArg !== null && thisArg !== undefined && thisArg !== globalThis)
            throw new TypeError('Illegal invocation');
    }

    /**
     * @param timeout a timeout in milliseconds
     * @param handler a callback
     * @returns
     */
    function createTimeoutSource(timeout: number, handler: (...args: any[]) => any) {
        const source = GLib.timeout_source_new(timeout);
        source.set_priority(GLib.PRIORITY_DEFAULT);
        GObject.source_set_closure(source, handler);

        return source;
    }

    /**
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait before running callback
     * @param args arguments to pass to callback
     */
    function setTimeout(this: unknown, callback: (...args: any[]) => any, delay = 0, ...args: any[]) {
        checkThis(this);

        delay = validateDelay(delay);
        const boundCallback = callback.bind(globalThis, ...args);
        const source = createTimeoutSource(delay, () => {
            if (!timeouts.has(source))
                return GLib.SOURCE_REMOVE;

            boundCallback();
            releaseSource(source);
            // PromiseNative.drainMicrotaskQueue();

            return GLib.SOURCE_REMOVE;
        });

        addSource(source);
        return source;
    }

    /**
     * @param callback a callback function
     * @param delay the duration in milliseconds to wait between calling callback
     * @param args arguments to pass to callback
     */
    function setInterval(this: unknown, callback: (...args: any[]) => any, delay = 0, ...args: any[]) {
        checkThis(this);

        delay = validateDelay(delay);
        const boundCallback = callback.bind(globalThis, ...args);
        const source = createTimeoutSource(delay, () => {
            if (!timeouts.has(source))
                return GLib.SOURCE_REMOVE;

            boundCallback();
            // PromiseNative.drainMicrotaskQueue();

            return GLib.SOURCE_CONTINUE;
        });

        addSource(source);
        return source;
    }

    /**
     * @param source the timeout to clear
     */
    function _clearTimer(source: GLib.Source | null) {
        if (!timeouts.has(source))
            return;

        if (source) {
            source.destroy();
            releaseSource(source);
        }
    }

    /**
     * @param timeout the timeout to clear
     */
    function clearTimeout(timeout: GLib.Source | null = null) {
        _clearTimer(timeout);
    }

    /**
     * @param timeout the timeout to clear
     */
    function clearInterval(timeout = null) {
        _clearTimer(timeout);
    }

    Object.defineProperty(globalThis, 'setTimeout', {
        configurable: false,
        enumerable: true,
        writable: true,
        value: setTimeout,
    });

    Object.defineProperty(globalThis, 'setInterval', {
        configurable: false,
        enumerable: true,
        writable: true,
        value: setInterval,
    });

    Object.defineProperty(globalThis, 'clearTimeout', {
        configurable: false,
        enumerable: true,
        writable: true,
        value: clearTimeout,
    });

    Object.defineProperty(globalThis, 'clearInterval', {
        configurable: false,
        enumerable: true,
        writable: true,
        value: clearInterval,
    });
}