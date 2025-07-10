/** @noSelf */
declare module "@luamod/base64" {
    export function encode(value: string): string;
    export function decode(text: string): string;

    const _default: typeof import("@luamod/base64");
    export default _default;
}
