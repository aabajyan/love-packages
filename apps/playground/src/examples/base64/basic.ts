import base64 from "@luamod/base64";
import { GameLoop } from "../base";

export class Base64Basic extends GameLoop {
    load(): void {
        const message = "Hello, world!";
        const encoded = base64.encode(message);
        print(`Encoded: ${encoded}`);

        const decoded = base64.decode(encoded);
        print(`Decoded: ${decoded}`);
    }
}
