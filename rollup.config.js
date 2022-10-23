import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from "@rollup/plugin-node-resolve"
import { terser } from 'rollup-plugin-terser';


export default {
    input: 'src/highlight.ts',
    output: {
        dir: 'output',
        format: 'iife',
        compact: true,
        plugins: [terser()]

    },
    plugins: [typescript(), nodeResolve()],

};