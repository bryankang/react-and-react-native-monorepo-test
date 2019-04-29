import { useEffect, useState } from "react";
import { Dimensions, StatusBar } from "react-native";

export function isScreenPortrait(): boolean {
    const width = Dimensions.get("screen").width;
    const height = Dimensions.get("screen").height;
    const isScreenPortrait = height >= width;

    return isScreenPortrait;
}

// android only
export function useScreenOrientation(): number {
    const isPortrait = isScreenPortrait();
    const initialStatusBarHeight = isPortrait ? StatusBar.currentHeight : 0;
    const [statusBarHeight, setStatusBarHeight] = useState(initialStatusBarHeight);

    useEffect(() => {
        setStatusBarHeight(StatusBar.currentHeight);
    }, [isPortrait]);

    return statusBarHeight || 0;
}
