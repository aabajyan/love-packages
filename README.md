# Luamod

A collection of Lua libraries—some for Love2D, some just useful anywhere—plus TypeScript typings so you can use them in modern editors without the guesswork.

## Packages

You'll find each library in its own folder under `packages/`. More will show up over time.

Each package comes with:

- The original Lua code
- TypeScript `.d.ts` definitions
- Packaging for easy install via npm or pnpm

## How to use

Install any package you want:

```sh
pnpm add @luamod/<package>
```

After that, just require or import it like you normally would:

```ts
import * as json from '@luamod/json';
const encoded = json.encode({ foo: 'bar' });
```

> **Note:** The npm package version is independent from the original Lua library version. See each package's `package.json` for the included Lua version.

## License

Every package keeps its original license. Check the folders for details.
