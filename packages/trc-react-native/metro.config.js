const path = require("path");

module.exports = {
    transformer: {
        getTransformOptions: async () => ({
            transform: {
                experimentalImportSupport: false,
                inlineRequires: false,
            },
        }),
    },
    /**
     * Add "global" dependencies for our RN project here so that our local components can resolve their
     * dependencies correctly
     */
    resolver: {
        extraNodeModules: {
            react: path.resolve(__dirname, "node_modules/react"),
            "react-native": path.resolve(__dirname, "node_modules/react-native"),
            "@storybook": path.resolve(__dirname, "node_modules/@storybook"),
            // "@storybook/addon-info": path.resolve(__dirname, "node_modules/@storybook/addon-info"),
        },
    },
    /**
     * Add our workspace roots so that react native can find the source code for the included packages
     * in the monorepo
     */
    projectRoot: path.resolve(__dirname),
    watchFolders: [
        // path.resolve(__dirname, ".storybook"),
        path.resolve(__dirname, "../trc-core"),
        path.resolve(__dirname, "../../node_modules"),
    ],
};
