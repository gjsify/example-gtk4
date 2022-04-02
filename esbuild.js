import { build } from "esbuild";
// import babel from 'esbuild-plugin-babel';

await build({
    entryPoints: ['main.ts'],
    outfile: 'dist/main.js',
    bundle: true,
    // plugins: [babel({
    //     config: {
    //         presets: ["@babel/preset-typescript"],
    //         plugins: ['gjs']
    //     }
    // })],
    // target: "firefox60", // Since GJS 1.53.90
    // target: "firefox68", // Since GJS 1.63.90
    target: "firefox78", // Since GJS 1.65.90
    // target: "firefox91", // Since GJS 1.71.1
    format: 'esm',
    // platform: 'node',
    external: ['gi://*'],
})