/** @noSelf */
declare module "@luamod/tiny-ecs" {
    export interface System<F extends Record<string, unknown>> {
        filter: Filter;
        process: (entity: F, dt: number) => void;
    }

    export interface Filter {
        a: boolean;
    }

    export interface World {
        update(dt: number): void;
    }

    export function requireAll(...fields: string[]): Filter;
    export function requireAny(...fields: string[]): Filter;
    export function rejectAll(...fields: string[]): Filter;
    export function rejectAny(...fields: string[]): Filter;
    export function filter(pattern: string): Filter;

    export function processingSystem<
        F extends Record<string, unknown>,
    >(): System<F>;

    export function world(...args: unknown[]): World;

    const _default: typeof import("@luamod/tiny-ecs");
    export default _default;
}
