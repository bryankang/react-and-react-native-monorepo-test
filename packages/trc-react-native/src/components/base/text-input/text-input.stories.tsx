import React, { FC, useRef, useEffect } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, text, select } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { TextInput, TextInputRef } from "../text-input/text-input";

storiesOf("base/TextInput", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as IconUnicodeName[];

        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <TextInput
                    style={{ width: 280 } as StyleProp<ViewStyle>}
                    isDisabled={boolean("isDisabled", false)}
                    editable={boolean("editable", true)}
                    multiline={boolean("multiline", false)}
                    numberOfLines={4}
                    iconName={select("iconName", iconNames, iconNames[0])}
                    placeholder={text("placeholder", "Placeholder")}
                    value={text("value", "")}
                    hasIcon={boolean("hasIcon", true)}
                    onChangeText={action("onChangeText")}
                />
            </View>
        );
    })
    .add("dynamic", () => {
        const DynamicTextInput: FC = () => {
            const textInputRef = useRef<TextInputRef>(null);
            useEffect(() => {
                setTimeout(() => {
                    if (textInputRef.current) {
                        textInputRef.current.focus();
                    } else {
                        console.log("nope")
                    }
                }, 3000);
            }, [])

            return (
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <TextInput
                        ref={textInputRef}
                        value={text("value", "Click me!")}
                        onChangeText={action("onChangeText")}
                        // onPress={action("onPress")}
                    />
                </View>
            )
        }

        return <DynamicTextInput />;
    });
