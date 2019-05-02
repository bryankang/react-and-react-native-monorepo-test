import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

// eslint-disable-next-line import/no-default-export
export default {
    input: "src/index.ts",
    output: {
        file: "dist/index.js",
        format: "cjs",
    },
    external: ["react", "react-native", "@trainer-road/trc-core"],
    plugins: [
        resolve({ extensions }),
        commonjs({
            namedExports: {
                "node_modules/ramda/index.js": Object.keys(require("ramda")),
            },
        }),
        babel({
            extensions,
            exclude: "node_modules/**",
            configFile: false,
        }),
    ],
};
