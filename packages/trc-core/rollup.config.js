import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy'
import pkg from './package.json';

const extensions = [".ts", ".js"]

export default [
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/index.ts',
        external: ['ms'],
        output: {
            dir: 'dist',
            format: "cjs",
            name: "bundle"
        },
        onwarn: function ( message ) {
            if ( /moment/.test( message ) ) return;
            console.error( message );
        },
        plugins: [
            resolve({
                jsnext: true,
                extensions,
            }),
            babel({
                extensions
            }),
            commonjs({
                include: /node_modules/,
            }),
        ]
    }
];
