import R from "ramda";
import React from "react";
import { View, StyleSheet } from "react-native";
import { radios } from "@storybook/addon-knobs";
import { StatusBar } from "../src/components/base/status-bar/status-bar";
import { Theme, light as lightTheme, dark as darkTheme } from "@trainerroad/trc-core";
import { ThemeProvider, ScreenOrientationProvider } from "../src/utils/utils";

const themes = [lightTheme, darkTheme];

const selectOptions = themes.reduce((acc: any, value) => {
    acc[value.name] = `${value.name}`;
    return acc;
}, {});

function getRootStyles(args: { theme: Partial<Theme> }) {
    const backgroundColor: any = R.pathOr(lightTheme.backgroundColor, ["theme", "backgroundColor"], args);

    const root = {
        flex: 1,
        backgroundColor
    };

    return {
        root
    };
}

export function withRoot(storyFn: any): React.ReactElement {
    const themeName = radios("theme", selectOptions, "dark");
    const theme: any = R.find(R.propEq("name", themeName), themes);

    const styles = getRootStyles({ theme });

    return (
        <ScreenOrientationProvider>
            <ThemeProvider theme={theme}>
                <StatusBar />
                <View style={styles.root}>{storyFn()}</View>
            </ThemeProvider>
        </ScreenOrientationProvider>
    );
}
