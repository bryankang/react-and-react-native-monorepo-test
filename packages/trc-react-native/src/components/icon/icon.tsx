import React, { ReactElement, FC, ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { useTheme } from "../../utils/theme";
import { getIconStyles } from "./get-icon-styles";

export interface IconProps {
    name?: IconUnicodeName;
    status?: "default" | "active" | "disabled";
    style?: TextStyle;
    [prop: string]: any;
}

const defaultProps: IconProps = {
    name: "bicycle",
    status: "default",
};

const _Icon: FC<IconProps> = (props): ReactElement => {
    const theme = useTheme();

    const { name, status, style, ...rest } = props;

    const iconStyles = getIconStyles({ theme, props });

    return (
        <Text style={[iconStyles.root, style]} {...rest}>{iconCore.unicodes[name!]}</Text>
    );
};

_Icon.defaultProps = defaultProps;

export const Icon = _Icon;
