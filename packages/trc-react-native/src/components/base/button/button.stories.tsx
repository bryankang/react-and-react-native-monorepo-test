import R from "ramda";
import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, radios, select, text } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { Text } from "../text/text";
import { Button, ButtonProps } from "./button";

storiesOf("base/Button", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as Partial<IconUnicodeName>[];

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button
                    color={radios("color", {primary: "primary", secondary: "secondary", success: "success", info: "info", warning: "warning", danger: "danger" }, "primary") as ButtonProps["color"]}
                    iconName={select("iconName", iconNames, iconNames[0])}
                    isDisabled={boolean("isDisabled", false)}
                    isFluid={boolean("isFluid", false)}
                    onPress={action('onPress')}
                    size={radios("size", { s: "s", m: "m", l: "l" }, "m") as ButtonProps["size"]}
                    variant={radios("variant", { contained: "contained", outlined: "outlined" }, "contained") as ButtonProps["variant"]}
                >
                    {text("children", "Button")}
                </Button>
            </View>
        );
});
