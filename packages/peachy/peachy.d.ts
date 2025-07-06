/** @noSelf */
declare module "@luamod/peachy" {
	import type { Image } from "love.graphics";

	export default class Peachy<Tags extends string = string> {
		/**
		 * @customName new
		 * @noSelf
		 **/
		static create<Tags extends string = string>(
			dataFile: string | object,
			imageData?: Image,
			initialTag?: Tags,
		): Peachy<Tags>;

		setTag(tag: Tags): void;
		setFrame(frame: number): void;
		getFrame(): number;
		getJSON(): string;
		draw(
			x: number,
			y: number,
			rot?: number,
			sx?: number,
			sy?: number,
			ox?: number,
			oy?: number,
		): void;
		update(dt: number): void;
		nextFrame(): void;
		/** @customName call_onLoop */
		callOnLoop(): void;
		pause(): void;
		play(): void;
		stop(onLast?: boolean): void;
		onLoop<T extends unknown[]>(
			callback: (...args: T) => void,
			...args: T
		): void;
		togglePlay(): void;
		getWidth(): number;
		getHeight(): number;
		getDimensions(): LuaMultiReturn<[number, number]>;
	}
}
