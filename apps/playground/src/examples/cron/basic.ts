import cron from "@luamod/cron";
import { GameLoop } from "../base";

export class CronBasic extends GameLoop {
    load(): void {
        const printMessage = () => {
            print("hello");
        };

        const cron1 = cron.after(5, printMessage);

        cron1.update(2);
        cron1.update(5);
        cron1.reset();

        while (!cron1.update(1)) {
            print("hey");
        }

        const cron2 = cron.every(10, printMessage);
        cron2.update(5);
        cron2.update(4);
        cron2.update(12);
    }
}
