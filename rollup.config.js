import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { babel } from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';

// eslint-disable-next-line no-undef
const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/highlight.ts',
    output: {
        dir: 'output',
        compact: true,
        plugins: [terser()],
        sourcemap: !production

    },
    plugins: [
        typescript({ sourceMap: !production }),
        nodeResolve(),
        babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
        eslint({ exclude: ['node_modules/**'] }),
    ],
    preserveEntrySignatures: 'strict'
};