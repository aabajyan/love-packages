/** @customConstructor camera.new */
export class Camera {
    move(self: this, x: number, y: number): void;
    lookAt(self: this, x: number, y: number): void;
    position(self: this): [number, number];
    rotate(self: this, angle: number): void;
    rotateTo(self: this, angle: number): void;
    zoom(self: this, mul: number): void;
    zoomTo(self: this, zoom: number): void;
    attatch(self: this): void;
    detach(self: this): void;
    draw(self: this, func: (x: number, y: number) => void): void;
    worldCoords(self: this, x: number, y: number): [number, number];
    cameraCoords(self: this, x: number, y: number): [number, number];
    mousePosition(self: this): [number, number];
    lockX(self: this, x: number, smoother: number, ...args: unknown[]): void;
    lockY(self: this, y: number, smoother: number, ...args: unknown[]): void;
    lockPosition(self: this, x: number, y: number, smoother: number, ...args: unknown[]): void;
    lockWindow(self: this, x: number, y: number, x_min: number, x_max: number, y_min: number, y_max: number, smoother: number, ...args: unknown[]): void;
    smooth: {
        none(): void;
        linear(speed: number): void;
        damped(stiffness: number): void;
    }
}

export default function newCamera(x: number, y: number): Camera;