/** @noSelf */
declare module "@luamod/json" {
	function encode(value: unknown): string;
	function decode<T>(text: string): T;
}