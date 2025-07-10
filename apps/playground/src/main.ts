import { CronBasic } from "./examples/cron/basic";

if (os.getenv("LOCAL_LUA_DEBUGGER_VSCODE") === "1") {
    require("lldebugger").start();
}

const gameLoop = new CronBasic();

love.load = () => {
    gameLoop.load();
};

love.update = (dt) => {
    gameLoop.update(dt);
};

love.draw = () => {
    gameLoop.draw();
};
