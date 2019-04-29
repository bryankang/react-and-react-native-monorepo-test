import React, { ReactElement, FC, ReactNode } from "react";
import { View, Text } from "react-native";
import { iconCore, IconUnicodeName } from "@trainer-road/trc-core";
import { useTheme } from "../../utils/theme";
import { getIconStyles } from "./get-icon-styles";

export interface IconProps {
    name?: IconUnicodeName;
    status?: "default" | "active" | "disabled";
    [prop: string]: any;
}

const defaultProps: IconProps = {
    children: null,
};

const _Icon: FC<IconProps> = (props): ReactElement => {
    const theme = useTheme();

    const { name, ...rest } = props;

    const iconStyles = getIconStyles({ theme, props });

    return (
        <View style={iconStyles.root} {...rest}>
            <Text style={iconStyles.content}>{iconCore.unicodes[name]}</Text>
        </View>
    );
};

_Icon.defaultProps = defaultProps;

export const Icon = _Icon;
