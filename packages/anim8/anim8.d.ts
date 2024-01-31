import { Texture } from "love.graphics";
import { Quad } from "love.graphics";
import { Transform } from "love.math";

export class Animation {
    frames: Quad[];
    durations: number[];
    intervals: number[];
    totalDuration: number;
    timer: number;
    position: number;
    flippedH: boolean;
    flippedV: boolean;
    status: "playing" | "paused";

    onLoop: (this: void, self: Animation, loops: number) => void;

    clone(): Animation;

    flipH(): Animation;

    flipV(): Animation;

    update(dt: number): void;

    pause(): void;

    resume(): void;

    gotoFrame(position: number): void;

    draw(
        spritesheet: Texture,
        x?: number,
        y?: number,
        r?: number,
        sx?: number,
        sy?: number,
        ox?: number,
        oy?: number,
        kx?: number,
        ky?: number,
    ): void;

    draw(spritesheet: Texture, transform: Transform): void;

    getDimensions(): LuaMultiReturn<[number, number]>;

    pauseAtEnd(): void;

    pauseAtStart(): void;

    getFrameInfo(
        x: number,
        y: number,
        r?: number,
        sx?: number,
        sy?: number,
        ox?: number,
        oy?: number,
        kx?: number,
        ky?: number,
    ): LuaMultiReturn<
        [
            Quad,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
            number,
        ]
    >;

    getFrameInfo(transform: Transform): LuaMultiReturn<[Quad, Transform]>;
}

export interface Grid {
    getFrames(...coordinates: (number | string)[]): Quad[];

    (this: void, ...coordinates: (number | string)[]): Quad[];
}

export function newGrid(
    this: void,
    frameWidth: number,
    frameHeight: number,
    imageWidth: number,
    imageHeight: number,
    left?: number,
    top?: number,
    border?: number,
): Grid;

export function newAnimation(
    this: void,
    frames: Quad[],
    durations: number[] | { [key in number | string]: number },
    onLoop?: (this: void, self: Animation, loops_number: number) => string,
): Animation;
