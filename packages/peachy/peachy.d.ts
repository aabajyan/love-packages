/** @noSelf */
declare module "@luamod/peachy" {
    import type { Image } from "love.graphics";

    // FIXME: It's still WIP
    interface Peachy<Tags extends string = string> {
        setTag(tag: Tags): void;
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
        onLoop<T extends unknown[]>(callback: (...args: T) => void, ...args: T): void;
        togglePlay(): void;
        getWidth(): number;
        getHeight(): number;
        getDimensions(): LuaMultiReturn<[number, number]>;
    }

    /**
     * @customName new
     * NB! This is modified from original Peachy to read image in relative path,
     *     if we only provide the json. 
     */
    function create<Tags extends string = string>(
        dataFile: string | object,
        imageData?: Image,
        initialTag?: Tags
    ): Peachy<Tags>;
}