import json from "@luamod/json";
import { GameLoop } from "../base";

export class JSONBasic extends GameLoop {
    load(): void {
        const baseObj = { message: "Hello, world!" };
        const encoded = json.encode(baseObj);
        print(`Encoded: ${encoded}`);

        const decoded = json.decode<{ message: string }>(encoded);
        print(`Decoded: ${decoded.message}`);
    }
}