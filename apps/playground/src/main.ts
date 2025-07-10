import { encode } from "@luamod/json";

if (os.getenv("LOCAL_LUA_DEBUGGER_VSCODE") === "1") {
    require("lldebugger").start();
}

love.load = () => {
    love.graphics.setDefaultFilter("nearest", "nearest");
    print(encode({ hello: "world" }))
};

love.update = () => { };

love.draw = () => {
    love.graphics.print(`FPS: ${love.timer.getFPS()}`, 10, 10);
};
