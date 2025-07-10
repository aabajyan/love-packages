/** @noSelf */
declare module "@luamod/gamera" {
    export default class Gamera {
        x: number;
        y: number;
        scale: number;
        angle: number;

        setWorld(l: number, t: number, w: number, h: number): void;
        setWindow(l: number, t: number, w: number, h: number): void;
        setPosition(x: number, y: number): void;
        setScale(scale: number): void;
        setAngle(angle: number): void;

        getWorld(): LuaMultiReturn<[number, number, number, number]>;
        getWindow(): LuaMultiReturn<[number, number, number, number]>;
        getPosition(): LuaMultiReturn<[number, number]>;
        getScale(): number;
        getAngle(): number;
        getVisible(): LuaMultiReturn<[number, number, number, number]>;
        getVisibleCorners(): LuaMultiReturn<
            [number, number, number, number, number, number, number, number]
        >;

        draw(f: (l: number, t: number, w: number, h: number) => void): void;

        toWorld(x: number, y: number): LuaMultiReturn<[number, number]>;
        toScreen(x: number, y: number): LuaMultiReturn<[number, number]>;

        /**
         * @noSelf
         * @customName new
         **/
        static create(l: number, t: number, w: number, h: number): Gamera;
    }
}
