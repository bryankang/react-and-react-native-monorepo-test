import React, { FC, ReactNode, ReactElement, useEffect, useState } from "react";
import { View, StyleSheetProperties, StatusBar } from "react-native";
import { isScreenPortrait } from "../../utils/screen";

// SafeAreaView doesn't work on Android. This adds top padding
// for translucent status bars by getting the device's status bar
// height. (Translucent allows elements to cover the status bar, which
// gives us the "fullscreen" effect for things like the drawer.)
//
// Limitation #1: Can't get status bar height on landscape orientation.
// However, this shouldn't be a problem since design dictates the following:
// When in landscape mode, hide the status bar.
//
// Limitation #2: We're assuming that a device is in portrait mode if
// device height >= device width. The alternative is to integrate an
// unmaintained 3rd party library.
//
// Limitation #3: When starting the app in landscape mode, StatusBar.currentHeight
// returns the status bar height of the landscape mode. This is a problem when
// the status bar heights differ quite a bit. But since many users don't
// start in landscape mode, this should suffice for now. Tablet users might
// start in landscape, but the status bar height for them is usually the same
// in either orientation.
export interface SafeAreaViewProps {
    children?: ReactNode;
    style?: StyleSheetProperties;
    [prop: string]: any;
}
export const SafeAreaView: FC<SafeAreaViewProps> = (props): ReactElement => {
    const { children, style, ...rest } = props;

    const isPortrait = isScreenPortrait();
    const initialStatusBarHeight = isPortrait ? StatusBar.currentHeight : 0;
    const [statusBarHeight, setStatusBarHeight] = useState(initialStatusBarHeight);

    useEffect(() => {
        setStatusBarHeight(StatusBar.currentHeight);
    }, [isPortrait]);

    return (
        <View
            style={{
                paddingTop: isPortrait ? statusBarHeight : 0,
                ...style,
            }}
            {...rest}
        >
            <StatusBar hidden={!isPortrait} />
            {children}
        </View>
    );
};
