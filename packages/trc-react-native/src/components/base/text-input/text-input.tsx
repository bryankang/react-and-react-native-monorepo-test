import R from "ramda";
import React, { ReactElement, FC, useState, useCallback, useRef, forwardRef, ReactNode } from "react";
import { Animated, TextInput as NativeTextInput, TextInputProps as NativeTextInputProps, TouchableWithoutFeedback, TouchableWithoutFeedbackProps, ViewStyle, StyleProp, GestureResponderEvent, TextProps, NativeSyntheticEvent, TextInputFocusEventData, View, ViewProps } from "react-native";
import { useTheme } from "../../../utils/utils";
import { Button } from "../button/button"
import { getTextInputStyles } from "./get-text-input-styles";
import { Icon, IconProps } from "../icon/icon";

export interface TextInputProps extends NativeTextInputProps {
    children?: null;
    editable?: boolean;
    iconName?: IconProps["name"];
    hasIcon?: boolean;
    isDisabled?: boolean;
    multiline?: boolean;
    style?: StyleProp<ViewProps>;
}

export type TextInputRef = NativeTextInput;

export const TextInput = forwardRef<TextInputRef, TextInputProps>(({
    editable = true,
    iconName = "bicycle",
    hasIcon = false,
    isDisabled = false,
    multiline = false,
    style = {},
    ...rest
}, ref) => {
    const theme = useTheme();
    const styles = getTextInputStyles({ theme, hasIcon, isDisabled, multiline });

    return (
        <View style={[styles.root, style]}>
            <NativeTextInput
                ref={ref}
                editable={editable && !isDisabled}
                multiline={multiline}
                style={styles.textInput}
                allowFontScaling={false}
                placeholderTextColor={styles.textInputProps.placeholderTextColor}
                keyboardAppearance="default" // TODO: from core, see if curr theme is dark or light
                {...rest}
            />
            {(hasIcon && !multiline) && (
                <Icon
                    style={styles.icon}
                    name={iconName}
                    size="xxs"
                />
            )}
        </View>
    );
});

// export const TextInput: FC<TextInputProps> = ({
//     iconName = "bicycle",
//     hasIcon = false,
//     isDisabled = false,
//     ref = undefined,
//     style = {},
//     ...rest
// }): ReactElement => {
//     const theme = useTheme();
//     const styles = getTextInputStyles({ theme, hasIcon, isDisabled });

//     return (
//         <View
//             style={styles.root}
//         >
//             <NativeTextInput
//                 ref={ref}
//                 style={[styles.textInput, style]}
//                 allowFontScaling={false}
//                 keyboardAppearance="default" // TODO: from core, see if curr theme is dark or light
//                 {...rest}
//             />
//             {hasIcon && (
//                 <Icon
//                     style={styles.icon}
//                     name={iconName}
//                     size="xxs"
//                 />
//             )}
//         </View>
//     );
// };

// export const TextInput = React.forwardRef<TextInputRef, TextInputProps & NativeTextInputProps>((props, ref) => (
//     <_TextInput {...props} textInputRef={ref} />
// ));

// export const TextInput: FC<TextInputProps> = ({
//     isDisabled = false,
//     label = "Click me!",
//     onBlur = () => {},
//     onFocus = () => {},
//     style = {},
//     ...rest
// }): ReactElement => {
//     const theme = useTheme();
//     const [animationValue] = useState(() => new Animated.Value(0));
//     const textInputRef = useRef<NativeTextInput>(null);
//     const [hasFocus, setHasFocus] = useState(false);

//     const styles = getTextInputStyles({ theme, isDisabled, hasFocus });

//     return (
//         // <TouchableWithoutFeedback
//         //     onPress={() => textInputRef.current && textInputRef.current.focus()}
//         // >
//         //     <View
//         //         style={styles.root}
//         //     >
//         <NativeTextInput
//             style={styles.root}
//             ref={textInputRef}
//             allowFontScaling={false}
//             keyboardAppearance="default" // TODO: from core, see if curr theme is dark or light
//             onFocus={e => {
//                 setHasFocus(true);
//                 onFocus(e);
//             }}
//             onBlur={e => {
//                 setHasFocus(false);
//                 onBlur(e);
//             }}
//             {...rest}
//         />
//         //     </View>
//         // </TouchableWithoutFeedback>
//     );
// };
