import { Base64Basic } from "./examples/base64/basic";

if (os.getenv("LOCAL_LUA_DEBUGGER_VSCODE") === "1") {
    require("lldebugger").start();
}

const gameLoop = new Base64Basic();

love.load = () => {
    gameLoop.load();
};

love.update = (dt) => {
    gameLoop.update(dt);
};

love.draw = () => {
    gameLoop.draw();
};
