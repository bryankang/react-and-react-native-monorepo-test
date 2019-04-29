import React, { ReactElement, FC } from "react";
import { StatusBar as NativeStatusBar } from "react-native";
import { statusBarCore } from "@trainerroad/trc-core";
import { useTheme } from "../../utils/theme";
import { isScreenPortrait } from "../../utils/screen";
import { getStatusBarStyles } from "./get-status-bar-styles";

export const StatusBar: FC = (): ReactElement => {
    const theme = useTheme();
    const styles = getStatusBarStyles({ theme, statusBarCore });

    return (
        <NativeStatusBar
            backgroundColor="transparent"
            barStyle={styles.color}
            hidden={!isScreenPortrait()}
            translucent={true}
        />
    );
};
