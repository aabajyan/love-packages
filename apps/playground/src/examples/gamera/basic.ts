import Gamera from "@luamod/gamera";
import { GameLoop } from "../base";

export class GameraBasic extends GameLoop {
    private camera!: Gamera;

    load(): void {
        this.camera = Gamera.create(0, 0, 800, 600);
    }

    update(dt: number): void {
        if (love.keyboard.isDown("left")) {
            this.camera.x -= 100 * dt;
        }
        if (love.keyboard.isDown("right")) {
            this.camera.x += 100 * dt;
        }
        if (love.keyboard.isDown("up")) {
            this.camera.y -= 100 * dt;
        }
        if (love.keyboard.isDown("down")) {
            this.camera.y += 100 * dt;
        }
        if (love.keyboard.isDown("a")) {
            this.camera.setScale(this.camera.scale + dt);
        }
        if (love.keyboard.isDown("s")) {
            this.camera.setScale(this.camera.scale - dt);
        }
    }

    draw(): void {
        this.camera.draw(() => {
            love.graphics.print("Use arrow keys to move, A/S to zoom", 0, 0);
            love.graphics.rectangle("line", 200, 150, 400, 300);
        });
    }
}
