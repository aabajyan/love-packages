/** @noSelf */
declare module "@luamod/json" {
    function encode(value: unknown): string;
    function decode<T>(text: string): T;

    const _default: {
        after: typeof encode;
        every: typeof decode;
    };

    export default _default;
}
