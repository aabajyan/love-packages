declare module "@love-packages/hump/gamestate" {
    import { Handlers } from "love-typescript-definitions/typings/love/handlers";

    /** @noSelf */
    namespace gamestate {
        interface GameState extends Handlers {
            enter?: (previous: GameState, ...args: unknown[]) => void;
            leave?: (...args: unknown[]) => void;
            resume?: (...args: unknown[]) => void;
        }

        function switchTo(to: GameState, ...args: unknown[]): void;
        function push(to: GameState, ...args: unknown[]): void;
        function pop(...args: unknown[]): void;
        function current(): GameState;
        function registerEvents(): void;
    }

    export = gamestate;
}