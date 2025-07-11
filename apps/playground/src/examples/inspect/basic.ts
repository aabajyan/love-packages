import { inspect } from "@luamod/inspect";
import { GameLoop } from "../base";

export class InspectBasic extends GameLoop {
    load(): void {
        const obj = {
            some: { complex: "table" },
            number: 12,
        };

        print(inspect(obj));
    }
}
