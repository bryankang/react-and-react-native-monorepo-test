import R from "ramda";
import { StyleProp, ViewStyle, TextStyle, StyleSheet } from "react-native";
import { Theme, light as lightTheme } from "@trainerroad/trc-core";

interface Params {
    theme: Partial<Theme>;
    hasIcon: boolean;
    isDisabled: boolean;
    multiline: boolean;
}

export interface TextInputStyles {
    root: StyleProp<ViewStyle>;
    textInput: StyleProp<ViewStyle>;
    textInputProps: {
        placeholderTextColor: string;
    };
    icon: StyleProp<ViewStyle>;
}

const baseStyles = StyleSheet.create({
    root: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 120,
        borderColor: lightTheme.emphases.disabled,
    },
    textInput: {
        color: lightTheme.emphases.default,
    },
    icon: {
        position: "absolute",
        right: 0,
        color: lightTheme.emphases.default,
    },
});

export function getTextInputStyles(params: Params): TextInputStyles {
    const root: StyleProp<ViewStyle> = [baseStyles.root];
    const textInput: StyleProp<TextStyle> = [baseStyles.textInput];
    const textInputProps = {} as TextInputStyles["textInputProps"];
    const icon: StyleProp<TextStyle> = [baseStyles.icon];

    if (params.isDisabled) {
        root.push({
            opacity: .3,
        });
    }

    if (params.multiline) {
        textInput.push({
            height: 120,
        });
    }

    if (params.hasIcon && !params.multiline) {
        textInput.push({
            paddingRight: 24,
        });
    }

    const emphases = R.pathOr(lightTheme.emphases, ["emphases"], params.theme) as Theme["emphases"];
    const styles = R.pathOr(lightTheme.textInput, ["textInput"], params.theme) as Theme["textInput"];

    root.push({
        borderColor: emphases.disabled,
    });

    textInput.push({
        color: styles.foregroundColor,
    });

    textInputProps.placeholderTextColor = styles.placeholderColor;

    // TODO: Add animation to icon component itself?
    icon.push({
        color: emphases.active,
    });

    // if (params.hasFocus) {
    //     root.push({
    //         borderColor: emphases.muted,
    //     });
    // }



    // rootAnimationScale.from = 1;
    // rootAnimationScale.to = 2;

    return {
        root,
        icon,
        textInput,
        textInputProps,
        // rootAnimationScale,
    };
}
