import React, { ReactElement, FC } from "react";
import { StatusBar as NativeStatusBar } from "react-native";
import { statusBarCore } from "@trainerroad/trc-core";
import { useTheme, useScreenOrientation } from "../../../utils/utils";
import { getStatusBarStyles } from "./get-status-bar-styles";

export const StatusBar: FC = (): ReactElement => {
    const screenOrientation = useScreenOrientation();
    const theme = useTheme();
    const styles = getStatusBarStyles({ theme, statusBarCore });

    return (
        <NativeStatusBar
            backgroundColor="transparent"
            barStyle={styles.color}
            hidden={!screenOrientation.isPortrait}
            translucent={true}
        />
    );
};
