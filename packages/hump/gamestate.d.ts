import { Handlers } from "love-typescript-definitions/typings/love/handlers";

export interface GameState extends Handlers { }

/** @customName switch */
export function switchTo(to: GameState, ...args: unknown[]): void;

export function push(to: GameState, ...args: unknown[]): void;

export function pop(...args: unknown[]): void;

export function current(): GameState;

/**
 * @customName new
 * @deprecated
 */
export function newGameState(state: GameState): GameState;