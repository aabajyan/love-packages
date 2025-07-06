// Type definitions for kikito-cron (cron.lua)
// Project: https://github.com/kikito/cron.lua
// Author: Enrique García Cota

/** @noSelf */
declare module "@luamod/cron" {
    /**
     * Represents a scheduled clock/timer.
     */
    export interface Clock {
        /**
         * The current running time of the clock.
         */
        running: number;

        /**
         * Resets the timer to a given running time (default 0).
         * @param running The time to reset to.
         */
        reset(running?: number): void;

        /**
         * Updates the clock by a delta time.
         * @param dt Delta time (unit is user-defined: seconds, milliseconds, etc). Must be positive.
         * @returns For one-shot clocks, returns true if expired; for repeating clocks, returns false.
         */
        update(dt: number): boolean;
    }

    /**
     * Schedules a callback to be called once after a given time.
     * @param time Time interval (unit is user-defined: seconds, milliseconds, etc).
     * @param callback Function to call after time.
     * @param args Arguments to pass to callback.
     * @returns A Clock object.
     */
    export function after<T extends unknown[]>(
        time: number,
        callback: (...args: T) => void,
        ...args: T
    ): Clock;

    /**
     * Schedules a callback to be called repeatedly every given time interval.
     * @param time Time interval (unit is user-defined: seconds, milliseconds, etc).
     * @param callback Function to call every interval.
     * @param args Arguments to pass to callback.
     * @returns A Clock object.
     */
    export function every<T extends unknown[]>(
        time: number,
        callback: (...args: T) => void,
        ...args: T
    ): Clock;

    const _default: typeof import("@luamod/cron");
    export default _default;
}
