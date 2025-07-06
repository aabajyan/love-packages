/** @noSelf */
declare module "@luamod/json" {
    export function encode(value: unknown): string;
    export function decode<T>(text: string): T;

    const _default: typeof import("@luamod/json");
    export default _default;
}
