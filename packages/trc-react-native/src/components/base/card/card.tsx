import React, { ReactElement, FC, ReactNode } from "react";
import { View } from "react-native";
import { useTheme } from "../../../utils/theme";
import { getCardStyles } from "./get-card-styles";

export interface CardProps {
    children?: ReactNode;
    [prop: string]: any;
}

const defaultProps: CardProps = {
    children: null,
};

const _Card: FC<CardProps> = (props): ReactElement => {
    const theme = useTheme();

    const { children, ...rest } = props;

    const cardStyles = getCardStyles({ theme });

    return (
        <View style={cardStyles.root} {...rest}>
            <View style={cardStyles.content}>{children}</View>
        </View>
    );
};

_Card.defaultProps = defaultProps;

export const Card = _Card;
