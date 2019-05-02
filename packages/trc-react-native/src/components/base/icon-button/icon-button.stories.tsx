import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, radios, select, text } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { IconButton, IconButtonProps } from "./icon-button";

storiesOf("base/IconButton", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as Partial<IconUnicodeName>[];

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <IconButton
                    variant={radios(
                        "variant",
                        {
                            contained: "contained",
                            outlined: "outlined",
                            pill: "pill",
                        },
                        "contained") as IconButtonProps["variant"]}
                    color={radios(
                        "color",
                        {
                            primary: "primary",
                            secondary: "secondary",
                            success: "success",
                            info: "info",
                            warning: "warning",
                            danger: "danger"
                        },
                        "primary") as IconButtonProps["color"]}
                    size={radios("size", { s: "s", m: "m", l: "l" }, "m") as IconButtonProps["size"]}
                    iconName={select("iconName", iconNames, iconNames[0])}
                    label={text("label", "")}
                    isDisabled={boolean("isDisabled", false)}
                    onPress={action('onPress')}
                />
            </View>
        );
});
