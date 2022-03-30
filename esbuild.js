import { buildSync } from "esbuild";

buildSync({
    entryPoints: ['main.ts'],
    outfile: 'dist/main.js',
    bundle: true,
    target: "esnext",
    format: 'esm',
    // platform: 'node',
    external: ['gi://*'],
})