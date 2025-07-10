import ecs from "@luamod/tiny-ecs";
import { GameLoop } from "../base";

export class TinyECSBasic extends GameLoop {
    load(): void {
        const talkingSystem = ecs.processingSystem<{
            name: string;
            mass: number;
            phrase: string;
        }>();

        talkingSystem.filter = ecs.requireAll("name", "mass", "phrase");
        talkingSystem.process = (e, dt) => {
            e.mass = e.mass * dt * 3;
            print(`${e.name} who weighs ${e.mass} pounds, says ${e.phrase}`);
        };

        const joe = {
            name: "Joe",
            phrase: "I'm a plumber.",
            mass: 150,
            hairColor: "brown",
        };

        const myworld = ecs.world(talkingSystem, joe);

        for (let i = 0; i < 20; ++i) {
            myworld.update(1);
        }
    }
}