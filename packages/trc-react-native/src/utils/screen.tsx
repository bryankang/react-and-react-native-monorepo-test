import React, { ReactNode, ReactElement, FC, createContext, useEffect, useState, useContext } from "react";
import { View, Dimensions, StatusBar, ViewProps, ViewStyle, StyleProp } from "react-native";

export function isScreenPortrait(): boolean {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;
    return height >= width;
}

const ScreenOrientationContext = createContext({ isPortrait: true });

export interface ScreenOrientationProviderProps extends ViewProps {
    children?: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export const ScreenOrientationProvider: FC<ScreenOrientationProviderProps> = ({
    children,
    style = {},
    ...rest
}): ReactElement => {
    const [isPortrait, setIsPortrait] = useState(isScreenPortrait);

    return (
        <View
            onLayout={() => setIsPortrait(isScreenPortrait())}
            style={[{ flex: 1 }, style]}
            {...rest}
        >
            <ScreenOrientationContext.Provider
                value={{ isPortrait }}
            >
                {children}
            </ScreenOrientationContext.Provider>
        </View>
    );
};

export const useScreenOrientation = (): { isPortrait: boolean } => useContext(ScreenOrientationContext);




// // android only
// export function useScreenOrientation(): number {
//     const isPortrait = isScreenPortrait();
//     const initialStatusBarHeight = isPortrait ? StatusBar.currentHeight : 0;
//     const [statusBarHeight, setStatusBarHeight] = useState(initialStatusBarHeight);

//     useEffect(() => {
//         setStatusBarHeight(StatusBar.currentHeight);
//     }, [isPortrait]);

//     return statusBarHeight || 0;
// }

// TODO: Use context to listen for orientation changes (via onLayout) since
// we fixed storybook remounting bug, the orientation will not change
