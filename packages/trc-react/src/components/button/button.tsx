import { FC, CSSProperties, useEffect, useContext } from "react";
import { styles } from "./button.styles";
import { useTheme } from '../../hooks/useTheme';

export interface ButtonProps {
    /** prop1 description */
    intent?: "none" | "primary" | "success" | "info" | "warning" | "error";
    iconName?: string;
    iconPosition?: "left" | "right";
    isDisabled?: boolean;
    isFluid?: boolean;
    isLoading?: boolean;
    label?: string;
    size?: "small" | "medium" | "large";
    style?: CSSProperties;
    variant?: "contained" | "outlined";
    children?: string;
    [prop: string]: any;
};


const defaultProps: ButtonProps = {
    children: "",
    intent: "none",
    iconName: undefined,
    iconPosition: "left",
    isDisabled: false,
    isFluid: false,
    isLoading: false,
    label: "Button",
    size: "medium",
    style: {},
    variant: "contained",
};

const _Button: FC<ButtonProps> = (props): React.ReactElement => {
    const theme = useTheme();

    const {
        children,
        intent,
        iconName,
        iconPosition,
        isDisabled,
        isFluid,
        isLoading,
        label,
        size,
        style,
        variant,
        ...rest
    } = props;

    return (
        <button
            css={styles.root({ theme, props })}
            {...rest}
        >
            {children}
        </button>
    )
}

_Button.defaultProps = defaultProps;

export const Button = _Button;
