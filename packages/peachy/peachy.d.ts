/** @noSelf */
declare module "@luamod/peachy" {
    import type { Image, Quad } from "love.graphics";

    // FIXME: It's still WIP
    export interface Peachy {
        setTag(tag: string): void;
        setFrame(frame: number): void;
        getFrame(): number;
        getJSON(): string;
        draw(x: number, y: number, rot?: number, sx?: number, sy?: number, ox?: number, oy?: number): void;
        update(dt: number): void;
        nextFrame(): void;
        call_onLoop(): void;
        pause(): void;
        play(): void;
        stop(onLast?: boolean): void;
        onLoop(fn: (...args: any[]) => void, ...args: any[]): void;
        togglePlay(): void;
        getWidth(): number;
        getHeight(): number;
        getDimensions(): LuaMultiReturn<[number, number]>;
    }

    /**
     * Creates a new Peachy animation object.
     * @param dataFile Path to an Aseprite JSON file or predecoded data.
     * @param imageData LÖVE image to animate.
     * @param initialTag Animation tag to use initially.
     * @customName new
     */
    function create(
        dataFile: string | object,
        imageData?: Image,
        initialTag?: string
    ): Peachy;

    export default create;
}