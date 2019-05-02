import R from "ramda";
import React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { boolean, radios, select, text } from "@storybook/addon-knobs";
import { iconCore, IconUnicodeName } from "@trainerroad/trc-core";
import { Text } from "../text/text";
import { IconButton, IconButtonProps } from "./icon-button";

storiesOf("base/IconButton", module)
    .add("basic", () => {
        const iconNames = Object.keys(iconCore.unicodes) as Partial<IconUnicodeName>[];

        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <IconButton
                    color={select("color", ["primary", "secondary", "success"], "secondary") as IconButtonProps["color"]}
                    iconName={select("iconName", iconNames, iconNames[0])}
                    isDisabled={boolean("isDisabled", false)}
                    onPress={action('onPress')}
                    size={select("size", ["s", "m", "l"], "m") as IconButtonProps["size"]}
                    variant={select("variant", ["contained", "outlined"], "contained") as IconButtonProps["variant"]}
                >
                    {text("children", "IconButton")}
                </IconButton>
            </View>
        );
});
