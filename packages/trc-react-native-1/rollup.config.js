import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import copy from 'rollup-plugin-copy'


const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const name = 'RollupTypeScriptBabel';

export default {
  input: 'src/index.ts',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external

  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: ['react', 'react-native', '@trainer-road/trc-core'],
  plugins: [
    resolve({ extensions }),
    commonjs({
        namedExports : {
            "node_modules/ramda/index.js" : Object.keys(require("ramda"))
        }
    }),
    babel({
      extensions,
      exclude: 'node_modules/**',
      configFile: false
    })
    // copy({
    //   targets: [
    //     'src/**/*',
    //   ]
    // })
  ]

  // plugins: [
  //   // // Allows node_modules resolution
  //   // resolve({ extensions }),

  //   // // Allow bundling cjs modules. Rollup doesn't understand cjs
  //   // commonjs(),

  //   // // Compile TypeScript/JavaScript files
  //   // babel({
  //   //   extensions,
  //   //   include: ['src/**/*'],
  //   //   "presets": [
  //   //     "@babel/preset-react",
  //   //     "@babel/preset-typescript",
  //   //   ],
  //   //   "plugins": [
  //   //     "@babel/plugin-proposal-class-properties",
  //   //     "@babel/plugin-proposal-object-rest-spread"
  //   //   ],
  //   //  }),



  // ],

  // output: [{
  //   file: pkg.main,
  //   format: 'iife',
  // },
};
